const Discord = require('discord.js');
const { registerFont } = require('canvas');
const Canvas = require('canvas');

const fs = require('fs');

registerFont('./prompt-bold.ttf', { family: 'Prompt-Bold' })
registerFont('./prompt-medium.ttf', { family: 'Prompt-Medium' })
registerFont('./prompt-regular.ttf', { family: 'Prompt' })

module.exports.run = async(message) => {

  const canvas = Canvas.createCanvas(900, 430);
  const context = canvas.getContext('2d');
  const background = await Canvas.loadImage('transparent.png');
  context.drawImage(background, 0, 0, canvas.width, canvas.height);



  /* Image Generation: Takes all the images in the folder and randomizes them
  */
  let img_folder = "img/idol_cards/";


  var fileNames = fs.readdirSync(img_folder);

  let file = [];


  for (let i = 0; i < fileNames.length; i++) {
      file.push(fileNames[i]);
  }

  let rand_one = Math.floor(Math.random()*file.length);
  var rand_two=rand_one;
  while (rand_two==rand_one)
  {
     rand_two = Math.floor(Math.random()*file.length);
  }
  var rand_three=rand_two;
  while (rand_two==rand_three || rand_one==rand_three)
  {
      rand_three = Math.floor(Math.random()*file.length);
  }


  let card_one = file[rand_one];
  let card_two = file[rand_two];
  let card_three = file[rand_three];


  let img_title_one = card_one;
  let img_title_two = card_two;
  let img_title_three = card_three;

  let artist_name_one = img_title_one.split('_')[0];
  let artist_group_one = img_title_one.split('_')[1];
  artist_group_one = artist_group_one.replace('.png', '');

  let artist_name_two = img_title_two.split('_')[0];
  let artist_group_two = img_title_two.split('_')[1];
  artist_group_two = artist_group_two.replace('.png', '');

  let artist_name_three = img_title_three.split('_')[0];
  let artist_group_three = img_title_three.split('_')[1];
  artist_group_three = artist_group_three.replace('.png', '');
   

  /*Idol Pictures: Contains the pictures of the featured artists
   */

  const idol_pic_one = await Canvas.loadImage(img_folder + '' + artist_name_one + '_' + artist_group_one + '.png')
	context.drawImage(idol_pic_one, 15, 36, 256, 312);
  const idol_pic_two = await Canvas.loadImage(img_folder + '' + artist_name_two + '_' + artist_group_two + '.png')
	context.drawImage(idol_pic_two, 317, 36, 256, 312);
  const idol_pic_three = await Canvas.loadImage(img_folder + '' + artist_name_three + '_' + artist_group_three + '.png')
	context.drawImage(idol_pic_three, 619, 36, 256, 312);


  /*Frames: Static frames that will contain generated card code.
   */
  const frame_one = await Canvas.loadImage('img/frame.png')
	context.drawImage(frame_one, 0, 0, 287, 430);
  const frame_two = await Canvas.loadImage('img/frame.png')
	context.drawImage(frame_two, 302, 0, 287, 430);
  const frame_three = await Canvas.loadImage('img/frame.png')
	context.drawImage(frame_three, 604, 0, 287, 430);

  /* Idol Information: Contains the information of each idol that is generated.
  */


  // First Idol: Appears at the left of the canvas

  context.font = '27px "Prompt-Bold"';
  context.textAlign = "right";
  context.fillStyle = "#FFFFFF";
  let idol_name_one = (artist_name_one).toUpperCase();
  context.fillText(idol_name_one, 272, 385);

  context.font = '16px "Prompt-Medium"';
  context.textAlign = "right";
  context.fillStyle = "#FFFFFF";
  let idol_group_one = (artist_group_one).toUpperCase();
  context.fillText(idol_group_one, 272, 403);


  // Second Idol: Appears in the center of the canvas

  context.font = '27px "Prompt-Bold"';
  context.textAlign = "right";
  context.fillStyle = "#FFFFFF";
  let idol_name_two = (artist_name_two).toUpperCase();
  context.fillText(idol_name_two, 574, 385);

  context.font = '16px "Prompt-Medium"';
  context.textAlign = "right";
  context.fillStyle = "#FFFFFF";
  let idol_group_two = (artist_group_two).toUpperCase();
  context.fillText(idol_group_two, 574, 403);

  // Third Idol: Appears on the far right of the canvas

  context.font = '27px "Prompt-Bold"';
  context.textAlign = "right";
  context.fillStyle = "#FFFFFF";
  let idol_name_three = (artist_name_three).toUpperCase();
  context.fillText(idol_name_three, 876, 385);

  context.font = '16px "Prompt-Medium"';
  context.textAlign = "right";
  context.fillStyle = "#FFFFFF";
  let idol_group_three = (artist_group_three).toUpperCase();
  context.fillText(idol_group_three, 876, 403);

  /* Issue: Showcases the number of cards claimed
  */

  let rand_issue_one = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
  context.font = '19px "Prompt"';
  context.textAlign = "left";
  context.fillStyle = "#FFFFFF";
  let issue_one = ("Issue " + rand_issue_one).toUpperCase();
  context.fillText(issue_one, 15, 25);

  let rand_issue_two = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
  context.font = '19px "Prompt"';
  context.textAlign = "left";
  context.fillStyle = "#FFFFFF";
  let issue_two = ("Issue " + rand_issue_two).toUpperCase();
  context.fillText(issue_two, 317, 25);

  let rand_issue_three = Math.floor(Math.random() * (500 - 1 + 1)) + 1;
  context.font = '19px "Prompt"';
  context.textAlign = "left";
  context.fillStyle = "#FFFFFF";
  let issue_three = ("Issue " + rand_issue_three).toUpperCase();
  context.fillText(issue_three, 619, 25);





  const attachment = new Discord.MessageAttachment(canvas.toBuffer());

  message.channel.send(`<@${message.author.id}> is dropping cards!`, attachment);
}

 
module.exports.config = {
    name: "drop",
    aliases: [],
    usage: "-drop"
}
