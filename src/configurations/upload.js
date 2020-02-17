import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    // definindo o destino que as imagens serão armazenadas
    destination: path.resolve(__dirname, '..', '..', 'uploads'),

    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);

      cb(null, `${name}-${Date.now()}${ext}`);
    },
  }),
};
