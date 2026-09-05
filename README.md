# Tiny Project Health — سلامت پروژه TinyManager

[🇮🇷 فارسی](README.md) · [🇬🇧 English](README.en.md)

> یک پاسخ سریع به سؤال مدیر: **«این پروژه واقعاً سالم است یا نیاز به توجه دارد؟»** بدون اینکه مدیر مجبور شود چندین KPI را دستی پر کند.

## وضعیت

**Foundation — 0.1.0**

قابلیت اجرایی هنوز منتشر نشده است؛ این Repository فعلاً قرارداد محصول و ماژول را مشخص می‌کند.

## اصل طراحی

Project Health باید تا جای ممکن از داده‌های موجود TinyManager استفاده کند:

- Deadlineهای عقب‌افتاده
- Riskهای باز و بحرانی
- Delegationهای عقب‌افتاده
- Waiting Forهای طولانی
- تصمیم‌های باز
- تازگی آخرین Update

مدیر فقط وقتی چیزی قابل استخراج نیست، یک سؤال کوتاه دریافت می‌کند.

مسیر آینده:

```text
مدیر: وضعیت پروژه آریا چطوره؟
↓
Tiny AI پروژه را پیدا می‌کند
↓
داده ماژول‌ها را جمع می‌کند
↓
Health Score + دلیل‌های اصلی
↓
پیشنهاد اقدام بعدی
```

## خروجی هدف

```text
Project Health: 72 / 100
🟡 نیازمند توجه

دلایل اصلی:
- ۲ موعد عقب‌افتاده
- ۱ ریسک با امتیاز بالا
- ۳ روز از آخرین Update گذشته
```

## قابلیت‌های برنامه‌ریزی‌شده

- Health Score قابل توضیح
- وضعیت Green / Attention / Critical
- استفاده از Shared Projects
- Dashboard Widget
- Trend کوتاه‌مدت
- Explainability: دلیل امتیاز همیشه مشخص باشد
- Tiny AI Query و Actions

## Tiny AI Actions برنامه‌ریزی‌شده

- `tiny-project-health.calculate`
- `tiny-project-health.explain`
- `tiny-project-health.recommend-next-action`

## معماری

TypeScript + React؛ قابل اجرا به‌صورت Standalone و Module داخل [TinyManager](https://github.com/webtanan-sketch/tinymanager).

## مجوز

MIT
