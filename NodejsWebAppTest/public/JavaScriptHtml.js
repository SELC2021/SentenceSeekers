

function aFunction() {
    //console.log("running function");
    var x = document.getElementById("myText").value; //verb
    var y = document.getElementById("myText2").value; //noun
    var z = document.getElementById("myText3").value; //adjective
    var a = document.getElementById("myText4").value; //adverb

    var g = "";


    var aVerb = "156l7nmflaoi2n6lFsasenytlfdnasd";
    var bVerb = "156l7nmflaoi2n6lFsasenytlfdnasd";
    var aNoun = "156l7nmflaoi2n6lFsasenytlfdnasd";
    var bNoun = "156l7nmflaoi2n6lFsasenytlfdnasd";
    var aAdjective = "156l7nmflaoi2n6lFsasenytlfdnasd";
    var bAdjective = "156l7nmflaoi2n6lFsasenytlfdnasd";
    var aAdverb = "156l7nmflaoi2n6lFsasenytlfdnasd";
    var bAdverb = "156l7nmflaoi2n6lFsasenytlfdnasd";
    var numVerb = 0;
    var numNoun = 0;
    var numAdjective = 0;
    var numAdverb = 0;

    //Scanner tempScan2 = new Scanner(tempString2);
    //tempScan2.useDelimiter(" ");

    var words = x.split(" ");
    var words2 = y.split(" ");
    var words3 = z.split(" ");
    var words4 = a.split(" ");
    //var testvar = words[0] + " " + words[1]; // test
    //document.getElementById("demo").innerHTML = testvar; //test

    if (words.length == 1) {
        numVerb = 1;
        aVerb = words[0];
    }
    else if (words.length == 2) {
        numVerb = 2;
        aVerb = words[0];
        bVerb = words[1];
    }
    if (words2.length == 1) {
        numNoun = 1;
        aNoun = words2[0];
    }
    else if (words2.length == 2) {
        numNoun = 2;
        aNoun = words2[0];
        bNoun = words2[1];
    }
    if (words3.length == 1) {
        numAdjective = 1;
        aAdjective = words3[0];
    }
    else if (words3.length == 2) {
        numAdjective = 2;
        aAdjective = words3[0];
        bAdjective = words3[1];
    }
    if (words4.length == 1) {
        numAdverb = 1;
        aAdverb = words4[0];
    }
    else if (words4.length == 2) {
        numAdverb = 2;
        aAdverb = words4[0];
        bAdverb = words4[1];
    }


    /*
    var tempString3;
    var websitename;
    var tempstring;
    var i;
    */

    /*
    tempString3 = words[0].toString();
    websitename = "http://merriam-webster.com/dictionary/" + tempString3;
    var scraperapiClient = require('scraperapi-sdk')('f5e450d823882f2efdb356a6c352443a');
    var response = await scraperapiClient.get(websitename).toString();
    //console.log(response);
    tempstring = response;
    document.getElementById("demo").innerHTML = tempstring[2];
    */

    /*
    tempString3 = words[0];
    websitename = "curl \"http://api.scraperapi.com/?api_key=f5e450d823882f2efdb356a6c352443a&url=https://merriam-webster.com/dictionary/" + tempString3 + "\"";
    //var sys = require('sys');
    var exec = require('child_process').exec;
    function puts(error, stdout, stderr) { sys.puts(stdout) }
    exec(websitename, function (err, stdout, stderr) {
        console.log(stdout);
        tempstring = stdout;
    });
    document.getElementById("demo").innerHTML = tempstring;
    */

    /*
    for (i = 0; i < words.length; ++i) {
        tempString3 = words[i].toString();
        websitename = "http://merriam-webster.com/dictionary/" + tempString3;
        var scraperapiClient = require('scraperapi-sdk')('f5e450d823882f2efdb356a6c352443a')
        var response = await scraperapiClient.get(websitename)
        //console.log(response);
        tempstring = response.toString();
        document.getElementById("demo").innerHTML = "Successful pass " + (i + 1);

        if (tempstring.includes("href=\"/dictionary/verb\">verb") && numVerb < 2) {
            if (numVerb == 0) {
                aVerb = tempString3;
                
            }
            else if (numVerb == 1) {
                bVerb = tempString3;
            }
            ++numVerb;
        }
        else if (tempstring.includes("href=\"/dictionary/noun\">noun") && numNoun < 2) {
            if (numNoun == 0) {
                aNoun = tempString3;
            }
            else if (numNoun == 1) {
                bNoun = tempString3;
            }
            ++numNoun;
        }
        else if (tempstring.includes("href=\"/dictionary/adverb\">adverb") && numAdverb < 2) {
            if (numVerb == 0) {
                aAdverb = tempString3;
            }
            else if (numVerb == 1) {
                bAdverb = tempString3;
            }
            ++numAdverb;
        }

        else if (tempstring.includes("href=\"/dictionary/adverb\">adverb") && numAdjective < 2) {
            if (numAdjective == 0) {
                aAdjective = tempString3;
            }
            else if (numAdjective == 1) {
                bAdjective = tempString3;
            }
            ++numAdjective;
        }
        else {
            System.out.println("Error");
            //tempScan.close();
            //tempScan2.close();
            return;
        }
        //console.log("Sleeping for 10 second");
        //await delay(2000); // waits 10 seconds

    }
    */
    if (numVerb == 0) {
        //System.out.println("Error: wrong amount of verbs");
        //tempScan.close();
        //tempScan2.close();
        return;
    }

    if (numNoun == 0) {
        //System.out.println("Error: wrong amount of nouns");
        //tempScan.close();
        //tempScan2.close();
        return;
    }
    


    if (numVerb == 1 && numNoun == 1 && numAdjective == 0 && numAdverb == 0) {
        g = "The " + aNoun + " " + aVerb + ".";

    }
    else if (numVerb == 1 && numNoun == 1 && numAdjective == 1 && numAdverb == 0) {
        g = "The " + aAdjective + " " + aNoun + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 1 && numAdjective == 2 && numAdverb == 0) {
        g = "The " + aAdjective + " " + bAdjective + " " + aNoun + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 1 && numAdjective == 0 && numAdverb == 1) {
        g = "The " + aNoun + " " + " " + aAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 1 && numAdjective == 0 && numAdverb == 2) {
        g = "The " + aNoun + " " + " " + aAdverb + " " + bAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 1 && numAdjective == 1 && numAdverb == 1) {
        g = "The " + aAdjective + " " + aNoun + " " + aAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 1 && numAdjective == 1 && numAdverb == 2) {
        //System.out.printf("The %s %s had %s %s %s.\n", aAdjective, aNoun, aAdverb, bAdverb, aVerb);
        g = "The " + aAdjective + " " + aNoun + " had " + aAdverb + " " + bAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 1 && numAdjective == 2 && numAdverb == 1) {
        //System.out.printf("The %s %s %s had %s %s.\n", aAdjective, bAdjective, aNoun, aAdverb, aVerb);
        g = "The " + aAdjective + " " + bAdjective + " " + aNoun + " had " + aAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 1 && numAdjective == 2 && numAdverb == 2) {
        //System.out.printf("The %s %s %s had %s %s %s.\n", aAdjective, bAdjective, aNoun, aAdverb, bAdverb, aVerb);
        g = "The " + aAdjective + " " + bAdjective + " " + aNoun + " had " + aAdverb + " " + bAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 1 && numAdjective == 0 && numAdverb == 0) {
        //System.out.printf("The %s %s and %s.\n", aNoun, aVerb, bVerb);
        g = "The " + aNoun + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 1 && numAdjective == 1 && numAdverb == 0) {
        //System.out.printf("The %s %s %s and %s.\n", aAdjective, aNoun, aVerb, bVerb);
        g = "The " + aAdjective + " " + aNoun + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 1 && numAdjective == 2 && numAdverb == 0) {
        //System.out.printf("The %s and %s %s %s and %s.\n", aAdjective, bAdjective, aNoun, aVerb, bVerb);
        g = "The " + aAdjective + " and " + bAdjective + " " + aNoun + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 1 && numAdjective == 0 && numAdverb == 1) {
        //System.out.printf("The %s %s %s and %s.\n", aNoun, aAdverb, aVerb, bVerb);
        g = "The " + aNoun + " " + aAdverb + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 1 && numAdjective == 0 && numAdverb == 2) {
        //System.out.printf("The %s %s %s and %s %s.\n", aNoun, aAdverb, aVerb, bAdverb, bVerb);
        g = "The " + aNoun + " " + aAdverb + " " + aVerb + " and " + bAdverb + " " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 1 && numAdjective == 1 && numAdverb == 1) {
        //System.out.printf("The %s %s %s %s and %s.\n", aAdjective, aNoun, aAdverb, aVerb, bVerb);
        g = "The " + aAdjective + " " + aNoun + " " + aAdverb + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 1 && numAdjective == 1 && numAdverb == 2) {
        //System.out.printf("The %s %s %s %s and %s %s.\n", aAdjective, aNoun, aAdverb, aVerb, bAdverb, bVerb);
        g = "The " + aAdjective + " " + aNoun + " " + aAdverb + " " + aVerb + " and " + bAdverb + " " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 1 && numAdjective == 2 && numAdverb == 1) {
        //System.out.printf("The %s and %s %s %s %s and %s.\n", aAdjective, bAdjective, aNoun, aAdverb, aVerb, bVerb);
        g = "The " + aAdjective + " and " + bAdjective + " " + aNoun + " " + aAdverb + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 1 && numAdjective == 2 && numAdverb == 2) {
        //System.out.printf("The %s and %s %s %s %s and %s %s.\n", aAdjective, bAdjective, aNoun, aAdverb, aVerb, bAdverb, bVerb);
        g = "The " + aAdjective + " and " + bAdjective + " " + aNoun + " " + aAdverb + " " + aVerb + " and " + bAdverb + " " + bVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 2 && numAdjective == 0 && numAdverb == 0) {
        //System.out.printf("The %s and %s %s.\n", aNoun, bNoun, aVerb);
        g = "The " + aNoun + " and " + bNoun + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 2 && numAdjective == 1 && numAdverb == 0) {
        //System.out.printf("The %s %s and %s %s.\n", aAdjective, aNoun, bNoun, aVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bNoun + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 2 && numAdjective == 2 && numAdverb == 0) {
        //System.out.printf("The %s %s and %s %s %s.\n", aAdjective, aNoun, bAdjective, bNoun, aVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bAdjective + " " + bNoun + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 2 && numAdjective == 0 && numAdverb == 1) {
        //System.out.printf("The %s and %s %s %s.\n", aNoun, bNoun, aAdverb, aVerb);
        g = "The " + aNoun + " and " + bNoun + " " + aAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 2 && numAdjective == 0 && numAdverb == 2) {
        //System.out.printf("The %s and %s %s %s %s.\n", aNoun, bNoun, aAdverb, bAdverb, aVerb);
        g = "The " + aNoun + " and " + bNoun + " " + aAdverb + " " + bAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 2 && numAdjective == 1 && numAdverb == 1) {
        //System.out.printf("The %s %s and %s %s %s.\n", aAdjective, aNoun, bNoun, aAdverb, aVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bNoun + " " + aAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 2 && numAdjective == 1 && numAdverb == 2) {
        //System.out.printf("The %s %s and %s %s %s %s.\n", aAdjective, aNoun, bNoun, aAdverb, bAdverb, aVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bNoun + " " + aAdverb + " " + bAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 2 && numAdjective == 2 && numAdverb == 1) {
        //System.out.printf("The %s %s and %s %s %s %s.\n", aAdjective, aNoun, bAdjective, bNoun, aAdverb, aVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bAdjective + " " + bNoun + " " + aAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 1 && numNoun == 2 && numAdjective == 2 && numAdverb == 2) {
        //System.out.printf("The %s %s and %s %s %s %s %s.\n", aAdjective, aNoun, bAdjective, bNoun, aAdverb, bAdverb, aVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bAdjective + " " + bNoun + " " + aAdverb + " " + bAdverb + " " + aVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 2 && numAdjective == 0 && numAdverb == 0) {
        //System.out.printf("The %s and %s %s and %s.\n", aNoun, bNoun, aVerb, bVerb);
        g = "The " + aNoun + " and " + bNoun + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 2 && numAdjective == 1 && numAdverb == 0) {
        //System.out.printf("The %s %s and %s %s and %s.\n", aAdjective, aNoun, bNoun, aVerb, bVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bNoun + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 2 && numAdjective == 2 && numAdverb == 0) {
        //System.out.printf("The %s %s and %s %s %s and %s.\n", aAdjective, aNoun, bAdjective, bNoun, aVerb, bVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bAdjective + " " + bNoun + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 2 && numAdjective == 0 && numAdverb == 1) {
        //System.out.printf("The %s and %s %s %s and %s.\n", aNoun, bNoun, aAdverb, aVerb, bVerb);
        g = "The " + aNoun + " and " + bNoun + " " + aAdverb + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 2 && numAdjective == 0 && numAdverb == 2) {
        //System.out.printf("The %s and %s %s %s and %s %s.\n", aNoun, bNoun, aAdverb, aVerb, bAdverb, bVerb);
        g = "The " + aNoun + " and " + bNoun + " " + aAdverb + " " + aVerb + " and " + bAdverb + " " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 2 && numAdjective == 1 && numAdverb == 1) {
        //System.out.printf("The %s %s and %s %s %s and %s.\n", aAdjective, aNoun, bNoun, aAdverb, aVerb, bVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bNoun + " " + aAdverb + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 2 && numAdjective == 1 && numAdverb == 2) {
        //System.out.printf("The %s %s and %s %s %s and %s %s.\n", aAdjective, aNoun, bNoun, aAdverb, aVerb, bAdverb, bVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bNoun + " " + aAdverb + " " + aVerb + " and " + bAdverb + " " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 2 && numAdjective == 2 && numAdverb == 1) {
        //System.out.printf("The %s %s and %s %s %s %s and %s.\n", aAdjective, aNoun, bAdjective, bNoun, aAdverb, aVerb, bVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bAdjective + " " + bNoun + " " + aAdverb + " " + aVerb + " and " + bVerb + ".";
    }
    else if (numVerb == 2 && numNoun == 2 && numAdjective == 2 && numAdverb == 2) {
        //System.out.printf("The %s %s and %s %s %s %s and %s %s.\n", aAdjective, aNoun, bAdjective, bNoun, aAdverb, aVerb, bAdverb, bVerb);
        g = "The " + aAdjective + " " + aNoun + " and " + bAdjective + " " + bNoun + " " + aAdverb + " " + aVerb + " and " + bAdverb + " " + bVerb + ".";
    }
    else {
        g = "Error: Problem with number of inputs";
    }

    document.getElementById("demo").innerHTML = g;

    //document.getElementById("demo").innerHTML = x; // a test
    
}

/*
function aFunction() {
    document.getElementById("demo").innerHTML = "test";
}
*/