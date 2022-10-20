import { UtilsLibraryService } from '@app/utils-library';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GatewayService {
  constructor(private utilService: UtilsLibraryService) {}
  getHello(): string {
    return this.utilService.config();
  }
}
