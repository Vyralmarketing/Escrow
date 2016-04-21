# Escrow

*a Jekyll theme for real estate agents who like to blog - yeeeeaah! :heart:*

The File Structure is as such:

    .
    ├── _config.yml //This is the settings file for jekyll
    ├── _drafts //this is where we store drafted posts
    ├── _includes //this are sections or blocks of html we use throughout the blog
    |   ├── footer.html
    |   └── header.html
    ├── _layouts //this controls the layout of the page. It's mainly comprised of the includes files.
    |   ├── default.html
    |   └── post.html
    ├── _posts //this is where the posts go. duh.
    |   ├── 2007-10-29-why-every-programmer-should-play-nethack.textile
    |   └── 2009-04-26-barcamp-boston-4-roundup.textile
    ├── _data //This controls all of the client info, images, etc.
    |   └── settings.yml
    ├── _site //Ignore it. This is the final generated site that jekyll produces.
    ├── css
    |   └── main.sass //the main sass file and all the sites css variables.
    ├── sass
    |   └── vendors
      |   └── normalize.scss // bourbon, skeleton and a few other css bases I used to make the site.
    |   └── main.sass //the main sass file and all the sites css
    ├── img //images directory
    |   └── icons //This is where things like the favicon go.
    |   └── svg //All the actual icons used inside the blog itself.
    └── index.html // this is the blog feed.


## Instructions:
  1. First thing you'll want to do is fill out the settings.yml file in the `_data` folder. It should all be very straight forward.
    client info, socials, and podcast info. Remember to fill out the podcast part, because otherwise it'll be left with the examples. If something doesn't apply leave it blank or in the case of the social links - leave them as `'#'`. It's set so they won't appear if they're left that way. The hashtag basically represents a blank link.

    Somethings will still need to be altered elsewhere in the theme. I suggest commenting it out rather than removing it outright. It's easier to add it back should the need arise.

    You can do that with html or liquid (Jekyll's templating language). In html that is
    `<!-- comment -->` in liquid it's  `{% comment %} comment {% endcomment %}`. The liquid comments won't render into the final html, so remember that.

  2. To add exterior links to the top navbar, simply follow the profiled format of:

          - title: Link text
           url: http://thisiswhataurllookslike
  3. The `homeeval` and `homesearch` are link values for the two call to action buttons. `VR_form` is the form action for the sign up form. This can be from Any ESP, or like we use at Vyral - Vertical Response :stuck_out_tongue_closed_eyes:

  4. The Images portion of the settings file control, *you guess it*, the images. `hero_logo_path` is the primary background image, `hero_logo_path` is the logo, and `client_headshot_path` is the headshot for the author that appears in posts and the about page. The `hero_background_hex` is the color of the header section. This is important because if you're on a slow connection the large hero image might take a while to download so you'll want the browser to pain a background so it appears at least, that it's loading faster, or makes the default white text visible. It should be the `$brand` color or preferably a color from the image.

  5. Next you'll want to adjust the colors, and adjust the css as needed. `main.sass` is the primary file with most of the settings in it. It should of course be very straightforward. The variables are as follows:

          $main-width: this controls the width of the container element
          $nav-height: the height of the navbar. This will effect things like how much margin the logo has up top and line height etc.

          //fonts
          $bodyfont: the font family for the body text.
          $headerfont: the font family for the head lines.

          //colors

          $brand: This is the main color.
          $brand-light: lighten($brand, 20%) //automatically 20% lighter
          $brand-dark: darken($brand, 10%)  //automatically 20% darker
          $bodycolor: font color for the body text
          $transparent-black: rgba(0,0,0,0.5) color for all kinds of things, like the navbar and header shadows.

          $nav-background: transparentize(black, 0.2)
          $header-font-color: white
          $header-shadow: 0 2px 7px black

    The theme includes a custom.sass file for individual theme adjustments. It's a good practice to use it to overwrite things. Especially if you ever need to update theme.


## Screenshots:

Main Page:

![Main Page](http://i.imgur.com/4lids74.jpg)

About Page:

![About Page](http://i.imgur.com/5nRTyRg.jpg)

[Demo](http://giant-pepper.cloudvent.net)
