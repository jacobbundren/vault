import { FileType } from "@/types/FileType";

export interface IFile {
  id: number;
  filename: string;
  size: string;
  type: FileType
}
