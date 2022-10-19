import { Module } from '@nestjs/common';
import { UtilsLibraryService } from './utils-library.service';

@Module({
  providers: [UtilsLibraryService],
  exports: [UtilsLibraryService],
})
export class UtilsLibraryModule {}
