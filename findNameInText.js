/*Write a function that searches text for a key word*/

var text = "blah blah blah blah Sierra blah blah blah Sierra blah blah blah Sierra";

var myName = "Sierra";

var hits= [];

for (var i=0; i<text.length; i++)
{if (text[i] === myName[0])
     {for(var j=i; j<(i+myName.length); j++)
        hits.push(text[j]);
    }
}

if(hits.length === 0)
{console.log("Your name wasn't found");}
else
{console.log(hits);}
