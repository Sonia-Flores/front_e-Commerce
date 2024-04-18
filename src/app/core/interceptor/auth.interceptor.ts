import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    
    console.log('INTERCEPTOR');

    const token = localStorage.getItem('token');
  if (token) {
    const reqWithHeaders = req.clone({
      headers: req.headers.set('Authorization', token)
  })
    return next(reqWithHeaders);
  }
  
  return next(req);
};
