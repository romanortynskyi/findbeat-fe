import Model from './model'

interface FileModel extends Model {
  src: string
  filename: string
}

export default FileModel
