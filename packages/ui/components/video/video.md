# Responsive table
Use the `video` component when you want to add a video element in the document.

Accepts both `.mp4` and `.webm` video formats and has a fallback message for browsers no supporting video.

## Use
The basic use of this component in *twig* is as follows:
```twig
{% include 'components/video/video.twig' with {
    component: {
        class: '',
        poster: '',
        mp4: '',
        webm: '',
        attr: ''
    }
} %}
```

## Options
* `mp4` or `webm`: Source files are indicated through this parameters. At least one source must be indicated.
* `poster` - *Optional*: Path to the image that will act as a poster for the video.
* `class` - *Optional*: Gives option to add custom classes to the component.
* `attr` - *Optional*: Gives option to indicate other attibutes accepted by the video component such as _autoplay, controls, playinline, mute_ etc.

## Example
### Video with poster
```twig
{% include 'components/video/video.twig' with {
    component: {
        poster: 'https://picsum.photos/id/320/560.jpg',
        mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
        webm: 'http://techslides.com/demos/sample-videos/small.webm',
    }
} %}
```

### Video with custom attributes
```twig
{% include 'components/video/video.twig' with {
    component: {
        mp4: 'http://techslides.com/demos/sample-videos/small.mp4',
        webm: 'http://techslides.com/demos/sample-videos/small.webm',
        attr: 'autoplay muted playsinline controls'
    }
} %}
```