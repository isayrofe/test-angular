import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpXsrfTokenExtractor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpinventarioInterceptor implements HttpInterceptor {

  constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const api_key = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjoiYWRtaW5pc3RyYWRvckBzZW1vdmlvYXhhY2EuZ29iLm14IiwidXN1YXJpb19pZCI6IjEiLCJyb2wiOjEsImFwbGljYWNpb24iOjEsImFyZWEiOiIxIiwibW9kdWxvIjoiNSIsIm1vZHVsb19ub21icmUiOiJNw5NEVUxPIENBUkxPUyBHUkFDSURBIiwicGVyc29uYSI6IjEiLCJwZXJzb25hX25vbWJyZSI6IkFETUlOSVNUUkFET1IgREVMIFNJU1RFTUEiLCJub21icmVfYXBsaWNhY2lvbiI6InNlcnZpY2lvcyIsImlhdCI6MTcwNzkwNjY0MiwiZXhwIjoxNzA3OTI0NjQyfQ.E9C58W3aKgQ4I8PFmqXRXP1tP2kRUPhf9VonASw0kqWy7buziVSS3kc40z0z4yOwafwRaRKMtXMSlRQokOY_Y4k41dXPOfg_tQ-1CfhTRqIk93YwNFoc_la9GS5YX6oWA5nqS9hCzyWsvcH7jaysriSFsKE6J0i42pT3f_tMLIoeEdpxCYrAdTgNmDhaHhAK8zSiQDrzedJygjwtmqdYWqaW1gvyEqE8znlBfXMNikYFr3W9vROTacvx_p4kHhmoU6910J8E4FAAz8TWm3UeKPZa8XCuFBdlsU76L5-uXeH4eiI26pYA0XYCqCRWFDLweRJB2W0ShiOlWSjn-ewfOw";
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${api_key}`,
    });



    const cookieheaderName = 'Set-Cookie';
    let csrfToken = this.tokenExtractor.getToken() as string;
    console.log("token"+csrfToken)
    const clonedRequest = request.clone({
      headers: headers,
      withCredentials: true,

    });


    return next.handle(clonedRequest);
  }
}
