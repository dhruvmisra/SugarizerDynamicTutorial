export default {
  steps: {
    0: {

    },
    1: {
      "indexTitle": {
        lang: "html",
        code: `
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <title>Pawn Activity</title>
  <meta name="viewport"
    content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, viewport-fit=cover" />
  <link rel="prefetch" type="application/l10n" href="locale.ini" />
  <link rel="stylesheet" media="not screen and (device-width: 1200px) and (device-height: 900px)"
    href="lib/sugar-web/graphics/css/sugar-96dpi.css">
  <link rel="stylesheet" media="screen and (device-width: 1200px) and (device-height: 900px)"
    href="lib/sugar-web/graphics/css/sugar-200dpi.css">
  <link rel="stylesheet" href="css/activity.css">
  <link rel="stylesheet" href="css/libnotify.css">
  <link rel="stylesheet" href="css/bootstrap-tour-standalone.min.css">
  <script>if (typeof module === 'object') { window.module = module; module = undefined; }</script>
  <script src="lib/vue.min.js"></script>
  <script>if (typeof module === 'object') { window.module = module; module = undefined; }</script>
  <script src="lib/jquery-3.4.1.min.js"></script>
  <script src="lib/bootstrap-tour-standalone.min.js"></script>
  <script>if (window.module) module = window.module;</script>
  <script src="lib/require.js"></script>
</head>
...
        `
      }
      
    }
  }
}