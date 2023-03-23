import { FileType } from "@/types/FileType";

export default interface File {
  id?: number;
  filename: string;
  size: number;
  type: FileType,
  url: string
}
