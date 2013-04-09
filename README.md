Slickhover.js
==========

Slickhover.js is a lightweight useful jQuery plugin that produces a slick and smooth hover effect that fades out images and shows a custom icon when a user hovers over an image. All you have to do is call it on an image selector...

[View Demo](http://9bitstudios.github.com/slickhover/) | [Buy Author a Coffee](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NNCJ79B2W6MUL)

All you have to do is call it on an image and pass in the options you want. For example...

```javascript
$(window).load(function(){
  $('.slickHoverVideo.').slickhover({
    icon: "images/slickHover/video-white.png",
    color:"#ffcc66",
    opacity:0.5,
    speed:800,
    animateIn: true
  });
});
```

It's best to call Slickhover.js on $(window).load (as opposed to $(document).ready) so that Slckhover can figure out positioning based on image dimenstions.

### CSS

For best results, set the following CSS for the images that you are calling slickhover on....

```css
img {
  color: transparent;
  font-size: 0;
  vertical-align: middle;
  -ms-interpolation-mode: bicubic;
  position: relative;
  z-index: 2;
}
```

### Options

Below is a listing of options your can set....

| Option | Value | Default Value | Description | Example |
| --- | --- | --- | --- | --- |
| icon | String | "images/slickhover/zoom-white.png" | The path to the icon (relative to the place slickhover is called from -- not the location of the .js file.) You could also use an absolute path e.g. "http://www.9bitStudios.com/images/slickhover/zoom-white.png" | icon: "images/slickHover/video-white.png" |
color |  String (hex color) | "#000000" | Hex value that changes the color of the overlay | color: "#000033"
opacity | Decimal (between 0 and 1) | 0.2 | How opaque to make the image, with 0 being completely opaque and 1 having no opacity. 0.5 would be the value in-between | opacity: 0.6
speed | Integer (in milliseconds) | 400 | The speed of the fade and animation transition. 1000 ms = 1 second | speed: 800
animateIn | Boolean | false | Sets whether or not to animate the icon in on hover. | animateIn: true

