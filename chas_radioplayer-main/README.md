# Sveriges Radio Player :radio:

Todays assignment is to use the Sveriges Radio API to fetch information about the radio channels and fetch playable audio stream urls to create a working radio player!

## How to complete this assignment

Before you go any further, take a moment to look at an example API response from Sveriges Radio. Here you can find a list of all 55 stations, and a url to each station's live stream: http://api.sr.se/api/v2/channels?format=json&size=100

Your task is to use `fetch()` to get this JSON from the Sveriges Radio API and render a list of channels with playable streams on your page. You should use at least the station name, image, and colour keys in the JSON to create a layout which looks something like this:

![Wireframe](https://github.com/davidshore/chas_radioplayer/blob/main/wireframe.png)

### API Key.

The Sveriges Radio API seems to work without any sort of authentication, so that's one less thing to worry about! :)

### Using APIs and updating the website

### Audio

Check out the [documentation](https://www.w3schools.com/tags/tag_audio.asp) for the `<audio>` tag. The format for the stream is mp3, so you'll need to use a `<source>` with the "type" of "audio/mpeg".

## GitHub

To complete this assignment, you need to fork this repository, add your code in the "code" folder, and then submit a pull request on GitHub (from your repository into the Technigo one) for review. [Read the guide on GitHub](https://guides.github.com/activities/forking/) for more info on how to do this.

### :books: Reading List

- [SR API Docs](http://sverigesradio.se/api/documentation/v2/index.html)
- [Audio HTML Tag](https://www.w3schools.com/tags/tag_audio.asp)
- [MDN Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---

### :sos: How to get help

Learning how to think as a web developer is learning how to be an expert in problem solving. So whenever you get stuck start with step 1 and continue until problem solved.

1. Google! In English, type in the error message if there is one, search within the language you're using (ie CSS, JavaScript etc).
2. Ask your code buddies in your team.
3. Ask your fellow students in Slack.
4. Ask the teacher. Please note: we are part of a sharing community - share the answer with your fellows.

---

### :boom: Success!

After completing this assignment you should be more comfortable using APIs, and have a little more of an idea of what you'd use an API for. You should be comfortable using `fetch()` now and to get data from the API into your page.

---

### :runner: Stretch Goals

#### First stretch goal

Design for zero data. Make your page look nice while the station list is loading by creating a "skeleton loader". Consider using the Chrome [network throttler](https://developers.google.com/web/tools/chrome-devtools/network-performance/network-conditions) to simulate a slow connection and make it easier to test your code.

#### Second stretch goal

This task has one more stretch goal, but it is a little tough, and you'll need to do some research to complete it.

The task is to implement a search function which calls `.filter()` on the station list to decide which channels to render. This stretch goal requires you to research how to use form inputs.

You will need use the `onChange` attribute on an input to invoke a function which will use the input's value in the `.filter()` call to filter the stations. If you want the search to be more flexible, look into using [regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) from the input value!
