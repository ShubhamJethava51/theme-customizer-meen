const { disableNotifications } = require("laravel-mix");
let mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js/app.js");
disableNotifications();