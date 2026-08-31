const ImageKit = require('@imagekit/nodejs');

const uploadImage = async (buffer) => {
    const client = new ImageKit({
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    });

    const response = await client.files.upload({
        file: buffer.buffer.toString('base64'),
        fileName:"pfp"+buffer.originalname,
        folder:'OreoChat'
    });
    return response;

}

module.exports = uploadImage;