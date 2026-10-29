import axios from 'axios';
import { useState, useEffect } from 'react';
import UploadIcon from '../assets/Upload';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [caption, setCaption] = useState('');
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');

  // Handle file selection & local preview
  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    setProgress(0);
    setUploadStatus('');

    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewUrl(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  };

  // Prevent memory leaks from created object URLs
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleUpload = async () => {
    if (!file || isUploading) return;

    if (!caption.trim()) {
      setUploadStatus('Please enter a caption first.');
      return;
    }

    setIsUploading(true);
    setProgress(0);
    setUploadStatus('');

    const formData = new FormData();
    // 'image' must match upload.single('image') in your Multer router
    formData.append('image', file);
    // 'caption' read by req.body.caption in your uploadPost controller
    formData.append('caption', caption);

    try {
      const token = localStorage.getItem('token'); // Only needed if using Bearer token

      const res = await axios.post('http://localhost:8000/api/posts/upload', formData, {
        withCredentials: true, // Crucial if your isLoggedIn middleware uses cookies/sessions
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        onUploadProgress: (progressEvent) => {
          if (progressEvent.total) {
            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percent);
          }
        },
      });

      setUploadStatus(res.data.message || 'Post uploaded successfully!');
      // Reset form after successful upload
      setFile(null);
      setPreviewUrl(null);
      setCaption('');
      setProgress(0);
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Error uploading post.';
      console.error('Upload Error:', err);
      setUploadStatus(errorMsg);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-dvh flex justify-center items-center p-4">
      <div className="relative w-full max-w-md border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-6 overflow-hidden bg-white shadow-sm">
        
        {/* Background SVG: visible only when no image is selected */}
        {!previewUrl && (
          <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none opacity-20">
            <UploadIcon className="w-40 h-40" />
          </div>
        )}

        <div className="relative z-10 flex flex-col items-center gap-4 w-full">
          {/* Image Preview Box */}
          {previewUrl && (
            <div className="w-full relative rounded-xl overflow-hidden border border-gray-200">
              <img
                src={previewUrl}
                alt="Upload preview"
                className="w-full h-48 object-cover"
              />
              <button
                type="button"
                onClick={() => {
                  setFile(null);
                  setPreviewUrl(null);
                }}
                className="absolute top-2 right-2 bg-black/70 hover:bg-black text-white text-xs px-2.5 py-1 rounded-md transition"
              >
                Remove
              </button>
            </div>
          )}

          {/* File Picker */}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200 cursor-pointer"
          />

          {/* Caption Input */}
          <input
            type="text"
            placeholder="Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Submit Button */}
          <button
            onClick={handleUpload}
            disabled={!file || !caption.trim() || isUploading}
            className={`w-full rounded-xl py-2 font-medium transition ${
              !file || !caption.trim() || isUploading
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            {isUploading ? 'Uploading Post...' : 'Upload Post'}
          </button>

          {/* Upload Progress Bar */}
          {progress > 0 && (
            <div className="w-full flex flex-col items-center gap-1">
              <progress value={progress} max="100" className="w-full h-2 rounded overflow-hidden" />
              <span className="text-xs text-gray-600 font-medium">{progress}%</span>
            </div>
          )}

          {/* Status Message */}
          {uploadStatus && (
            <p className={`text-sm ${uploadStatus.toLowerCase().includes('success') ? 'text-green-600' : 'text-red-500'}`}>
              {uploadStatus}
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Upload;