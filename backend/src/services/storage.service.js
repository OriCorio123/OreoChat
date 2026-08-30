const ImageKit = require('@imagekit/nodejs');

const uploadImage = async (buffer) => {
    const client = new ImageKit({
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    });

    const response = await client.files.upload({
        file: buffer.toString('base64'),
        folder:'OreoChat/pfp'
    });
    return response;

}

module.exports = uploadImage;