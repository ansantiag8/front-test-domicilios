import formAuthentication from './primary-authentication.html!text'

let controller = function () {
  let self = this

  // self.authenticate = authenticate
  // self.restorePassword = restorePassword
  // function authenticate () {
  //   let objLogin = new AuthenticationFactory()

  //   objLogin.email = self.email
  //   objLogin.password = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(self.password))
  //   objLogin.$create()
  //   .then((data) => {
  //     let headers = data.headers
  //     let dataUser = data.data
  //     setSessionData(dataUser, headers)
  //   })
  //   .catch((error) => {
  //     let msg = ''
  //     switch (error.status) {
  //       case 400:
  //         msg = 'AUTH.BAD'
  //         break
  //       case 404:
  //         msg = 'AUTH.BAD'
  //         break
  //       case 423:
  //         msg = 'AUTH.LOCKED_OUT'
  //         break
  //       default:
  //         msg = 'AUTH.ERROR'
  //     }
  //     swal($translate.instant('GENERIC.ERROR'), $translate.instant(msg), 'error')
  //   })
  // }

  // function setSessionData (data, headers) {
  //   AuthenticationService.set('name', data.user.name)
  //   AuthenticationService.set('email', data.user.email)
  //   AuthenticationService.set('id', data.user.id)
  //   AuthenticationService.set('status', data.user.status)
  //   AuthenticationService.set('token', headers.token)
  //   $state.go('app.area.select')
  // }

  // function restorePassword () {
  //   swal({
  //     title: 'Restablecer contraseña',
  //     text: 'Ingresa el correo electronico con el cual esta registrada tu cuenta, enviaremos un link para restablecer tu contraseña!',
  //     input: 'email',
  //     customClass: 'field',
  //     showCancelButton: true,
  //     reverseButtons: true,
  //     showLoaderOnConfirm: true,
  //     cancelButtonText: '<i class ="icon-icon_error"></i>',
  //     confirmButtonText: '<i class ="icon-icon_send_mail_fill"></i>',
  //     preConfirm: function (email) {
  //       return new Promise(function (resolve, reject) {
  //         setTimeout(function () {
  //           if (email === 'taken@example.com') {
  //             reject('This email is already taken.')
  //           } else {
  //             resolve()
  //           }
  //         }, 2000)
  //       })
  //     },
  //     allowOutsideClick: false
  //   }).then(function (prueba) {
  //     console.log(prueba)
  //     swal(
  //       'Deleted!',
  //       'Your file has been deleted.',
  //       'success'
  //     )
  //   }).catch(function () {
  //     return
  //   })
  // }
}

export default {
  controller: [
    controller
  ],
  template: formAuthentication
}
