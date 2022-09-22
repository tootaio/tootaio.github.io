# tootaio.github.io

[TOC]

## Project structure

### index.html

`index.html` contain the main framework and design of the whole site. DO NOT TOUCH IT unless you know what you're doing!

### docs/

The `docs` folder contains all topics in plain text. It will be used to record the text content of all modules, and written by the programmer to the Topics folder, in the corresponding file.

### topic/

`topic` folder contains all the tab inside the page

## How to contribute

> Using PhpStorm will make your works more efficiently.

### Startup

make sure NodeJS is installed on your computer

1. cd into your project folder
2. run `npm install`
3. run `npm run build`, you need to run this command everytime the code is change.
4. The generated file will create inside `dist` folder, open it and VOILA!.

### Declare your topic

First, you need to declare your topic in `site.json`

```json
{
  "fileName": "announcements",
  "name": "公告",
  "badge": "重要",
  "badgeStyle": "danger",
  "classList": "text-bg-primary text-center",
  "footer": "follow the instructions carefully"
}
```

#### Explanation

- `fileName`: the file name of the file inside `Topic` folder.
- `name`: the topic's name
- `badge`: (optional) if you need a small badge beside your topic, you can add it here.
- `badgeStyle`: (optional) the style of the badge, accepted styles are
  - `primary`, blue
  - `secondary`, grey
  - `success`, green
  - `danger`, red
  - `warning`, yellow
  - `info`, cyan
  - `light`, (default) white
  - `dark`, black
- `classList`: (optional) extension class for this topic, for example
  - `text-bg-primary`: The topic will show in blue background, you can replace `primary` with any of the style listed inside `badgeStyle`.
  - `text-center`: The text will align at center
- `footer`: The footer of the card. It will display the content at the bottom of the card.

### Code your topic

All the topic will show in card style of Bootstrap 5.0. The content of `fileName.html` will append inside the `<div class='card-body'>` tag.

All of the class is Bootstrap compatible.

<h2 id="coffee">Buy me a coffee</h2>

**❤如果觉得我们做的不错，劳烦客官打赏一杯咖啡哦❤**

<div>
<img alt="打赏" src="./src/Topics/Images/微信支付.png" height="256">
<img alt="打赏" src="./src/Topics/Images/支付宝收款码.jpg" height="256">
</div>
