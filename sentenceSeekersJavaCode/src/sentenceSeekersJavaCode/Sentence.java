package sentenceSeekersJavaCode;
import java.util.*;

public class Sentence {
	static void main(String[] args){
		
		// ask for amount of nouns, verbs, adjectives, and adverbs they want to use
		// have user assign all relevant variables
		// run SentenceCreater() with relevant parameters;
		
		/**
		 * initiallizes variables
		 */
		 Scanner tempScan = new Scanner(System.in); // need to integrate into website.
		 String aVerb = "156l7nmflaoi2n6lFsasenytlfdnasd";
		 String bVerb = "156l7nmflaoi2n6lFsasenytlfdnasd";
		 String aNoun = "156l7nmflaoi2n6lFsasenytlfdnasd";
		 String bNoun = "156l7nmflaoi2n6lFsasenytlfdnasd";
		 String aAdjective = "156l7nmflaoi2n6lFsasenytlfdnasd";
		 String bAdjective = "156l7nmflaoi2n6lFsasenytlfdnasd";
		 String aAdverb = "156l7nmflaoi2n6lFsasenytlfdnasd";
		 String bAdverb = "156l7nmflaoi2n6lFsasenytlfdnasd";
		 int numVerb = 0;
		 int numNoun = 0;
		 int numAdjective = 0;
		 int numAdverb = 0;
		 numVerb = tempScan.nextInt();
		 numNoun = tempScan.nextInt();
		 numAdjective = tempScan.nextInt();
		 numAdverb = tempScan.nextInt();
		
		 /**
		  * Assigns variables based on how many variables there are.
		  */
		if (numVerb == 1) {
			aVerb = tempScan.next();
		}
		else if (numVerb == 2) {
			aVerb = tempScan.next();
			bVerb = tempScan.next();
		}
		else {
			System.out.println("Error: wrong amount of verbs");
			tempScan.close();
			return;
		}
		if (numNoun == 1) {
			aNoun = tempScan.next();
		}
		else if (numNoun == 2) {
			aNoun = tempScan.next();
			bNoun = tempScan.next();
		}
		else {
			System.out.println("Error: wrong amount of nouns");
			tempScan.close();
			return;
		}
		if (numAdjective == 1) {
			aAdjective = tempScan.next();
		}
		else if (numAdjective == 0) {
			// do nothing
		}
		else if (numAdjective == 2) {
			aAdjective = tempScan.next();
			bAdjective = tempScan.next();
		}
		else {
			System.out.println("Error: wrong amount of adjectives");
			tempScan.close();
			return;
		}
		if (numAdverb == 1) {
			aAdverb = tempScan.next();
		}
		else if (numAdverb == 0) {
			// do nothing
		}
		else if (numAdverb == 2) {
			aAdverb = tempScan.next();
			bAdverb = tempScan.next();
		}
		else {
			System.out.println("Error: wrong amount of adverbs");
			tempScan.close();
			return;
		}
		
		
		SentenceCreater c = new SentenceCreater(aVerb, bVerb, aNoun, bNoun, aAdjective, bAdjective, aAdverb, bAdverb, numVerb, numNoun, numAdjective, numAdverb);
		c.sentenceOutput();
		tempScan.close();
	}
}
