!function(n, e) {
  'object' == typeof exports && 'undefined' != typeof module ?
      module.exports = e() :
      'function' == typeof define && define.amd ?
          define(e) :
          (n.__vee_validate_locale__fa = n.__vee_validate_locale__fa ||
              {}, n.__vee_validate_locale__fa.js = e());
}(this, function() {
  'use strict';
  let n = function(n) {
    let e = ['Byte', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        t = 0 === (n = 1024 * Number(n)) ?
            0 :
            Math.floor(Math.log(n) / Math.log(1024));
    return 1 * (n / Math.pow(1024, t)).toFixed(2) + ' ' + e[t];
  }, e = function(e) {
    let t = {Byte: 'بایت', KB: 'كیلوبایت', GB: 'گیگابایت', PB: 'پتابایت'};
    return n(e).replace(/(Byte|KB|GB|PB)/, function(n) {
      return t[n];
    });
  }, t = {
    name: 'fa', messages: {
      after: function(n, e) {
        return n + ' باید بعد از تاریخ ' + e[0] + ' باشد.';
      }, alpha_dash: function(n) {
        return n + ' فقط می‌تواند از حروف، اعداد، خط فاصله و زیرخط تشکیل شود.';
      }, alpha_num: function(n) {
        return n + ' فقط ‌می‌تواند از حروف و اعداد تشکیل شود.';
      }, alpha_spaces: function(n) {
        return n + ' فقط می‌تواند از حروف و فاصله تشکیل شود.';
      }, alpha: function(n) {
        return n + ' فقط می‌تواند از حروف تشکیل شود.';
      }, before: function(n, e) {
        return n + ' باید قبل از تاریخ ' +
          e[0] + ' باشد.';
      }, between: function(n, e) {
        return n + ' باید بین ' + e[0] + ' و ' + e[1] + ' کارکتر باشد.';
      }, confirmed: function(n) {
        return n + ' با تأییدیه اش مطابقت ندارد.';
      }, credit_card: function(n) {
        return n + ' غیر معتبر است.';
      }, date_between: function(n, e) {
        return n + ' باید بین تاریخ ' + e[0] + ' and ' + e[1] + ' باشد.';
      }, date_format: function(n, e) {
        switch (e[0]) {
          case 'YYYY':
            return n + ' باید در قالب سال شمسی باشد. ';

          case 'MM':
            return n + ' باید در قالب ماه شمسی باشد. ';

          case 'YYYY/MM/DD':
            return n + ' باید در قالب '+ moment().format('jYYYY/jMM/jDD')+ ' باشد. ';

          default:
            return n + ' باید در قالب ' + e[0] + ' باشد.';
        }

      }, decimal: function(n, e) {
        void 0 === e && (e = ['*']);
        let t = e[0];
        return n + ' باید یک مقدار عددی ' +
            ('*' === t ? '' : ' با حداکثر ' + t + ' اعشار') + ' باشد.';
      }, j_before: function(n, e) {
        return n + ' باید قبل از تاریخ ' + e[1].format(e[0]) + ' باشد.';
      },j_date_format: function(n, e) {
        return n + ' باید در قالب '+ moment().format(e[0])+ ' باشد. ';
      },digits: function(n, e) {
        return n + ' باید یک مقدار عددی و دقیقاً ' + e[0] + ' رقم باشد.';
      }, dimensions: function(n, e) {
        return n + ' باید در اندازه ' + e[0] + ' پیکسل عرض و ' + e[1] +
            ' پیکسل ارتفاع باشد.';
      }, email: function(n) {
        return n + ' باید یک پست الکترونیک معتبر باشد.';
      }, ext: function(n) {
        return n + ' باید یک فایل معتبر باشد.';
      }, image: function(n) {
        return n + ' باید یک تصویر باشد.';
      }, in: function(n) {
        return n + ' باید یک مقدار معتبر باشد.';
      }, ip: function(n) {
        return n + ' باید یک آدرس آی پی معتبر باشد.';
      }, max: function(n, e) {
        return n + ' نباید بیشتر از ' + e[0] + ' کارکتر باشد.';
      }, max_value: function(n, e) {
        return 'مقدار ' + n + ' باید ' + e[0] + ' یا کمتر باشد.';
      }, mimes: function(n, params) {
        return n + ' باید از نوع ( ' + params.join(', ') + ' ) باشد.';
      }, min: function(n, e) {
        return n + ' باید حداقل ' + e[0] + ' کارکتر باشد.';
      }, min_value: function(n, e) {
        return 'مقدار ' + n + ' باید ' + e[0] + ' یا بیشتر باشد.';
      }, not_in: function(n) {
        return n + 'باید یک مقدار معتبر باشد.';
      }, numeric: function(n) {
        return n + ' فقط می‌تواند عددی باشد.';
      }, regex: function(n) {
        return 'قالب ' + n + ' قابل قبول نیست.';
      }, required: function(n) {
        return n + ' الزامی‌است.';
      }, size: function(n, t) {
        let r = t[0];
        return 'حجم ' + n + ' کمتر از ' + e(r) + ' باشد.';
      }, url: function(n) {
        return n + ' باید یک تارنمای معتبر باشد.';
      }, exists: function(n) {
        return n + ' از قبل در سیستم وجود دارد ';
      }, requiredWithoutStrict: function(n) {
        return n + 'باید یک شماره شبای معتبر باشد';
      }, complexPassword: function(n) {
        return n + 'باید یک شماره شبای معتبر باشد';
      }, uniqueDomain: function(n) {
        return n + 'باید یک شماره شبای معتبر باشد';
      }, containsalpha: function(n) {
        return n + ' باید شامل حرف باشد';
      }, recaptcha: function(n) {
        return n + 'باید یک شماره شبای معتبر باشد';
      }, notVerifiedMobile: function(n) {
        return n + 'باید یک شماره شبای معتبر باشد';
      }, appRulesIban: function(n) {
        return n + 'باید یک شماره شبای معتبر باشد';
      }, uniqueuser: function(n) {
        return n + ' قبلا در سیستم ثبت‌شده است ';
      }, attachment: function(n) {
        return n + ' قبلا در سیستم ثبت‌شده است ';
      }, appRulesLuhn: function(n) {
        return n + ' وارد‌شده صحیح نیست ';
      }, pan: function(n) {
        return n + 'شماره‌کارت اشتباه است';
      }, unique: function(n) {
        return n + ' قبلا در سیستم ثبت‌شده است ';
      }, alphanum: function(n) {
        return n + ' باید شامل حروف و اعداد باشد ';
      }, uniquedomain: function(n) {
        return ' این دامنه قبلا در سیستم ثبت شده است ';
      }, requiredwithout: function(n) {
        return ' این فیلد در صورت نبود لازم است. ';
      }, appRulesUniqueUsername: function(n) {
        return 'لینک شخصی تکراری است.';
      },
    }, attributes: {},
  };
  return 'undefined' != typeof VeeValidate &&
  VeeValidate.Validator.addLocale(t), t;
});