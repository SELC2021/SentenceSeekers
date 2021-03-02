package sentenceSeekersJavaCode;


public class SentenceCreater {
	
	/**
	 * initiallizes variables
	 */
	private String verb1;
	private String verb2;
	private String noun1;
	private String noun2;
	private String adjective1;
	private String adjective2;
	private String adverb1;
	private String adverb2;
	private int numVerb;
	private int numNoun;
	private int numAdjective;
	private int numAdverb;
	
	/**
	 * assigns given variables, determines how many of each part of speech exists.
	 * @param aVerb
	 * @param bVerb
	 * @param aNoun
	 * @param bNoun
	 * @param aAdjective
	 * @param bAdjective
	 * @param aAdverb
	 * @param bAdverb
	 * @param verbCount
	 * @param nounCount
	 * @param adjectiveCount
	 * @param adverbCount
	 * @return
	 */
	public sentenceCreater(String aVerb, String bVerb, String aNoun, String bNoun, String aAdjective, String bAdjective, String aAdverb, String bAdverb, int verbCount, int nounCount, int adjectiveCount, int adverbCount) {
		verb1 = aVerb;
		verb2 = bVerb;
		noun1 = aNoun;
		noun2 = bNoun;
		adjective1 = aAdjective;
		adjective2 = bAdjective;
		adverb1 = aAdverb;
		adverb2 = bAdverb;
		numVerb = verbCount;
		numNoun = nounCount;
		numAdjective = adjectiveCount;
		numAdverb = adverbCount;
		
		
	}
	
	public void sentenceOutput() {
		if (numVerb == 1 && numNoun == 1 && numAdjective == 0 && numAdverb == 0) {
			System.out.println("The " + noun1 +  " " + verb1 ".");
			
		}
		else if (numVerb == 1 && numNoun == 1 && numAdjective == 1 && numAdverb == 0) {
			System.out.println("The "+ adjective1 + " " + noun1 + " " + verb1 + ".");
		}
		else if (numVerb == 1 && numNoun == 1 && numAdjective == 2 && numAdverb == 0) {
			
		}
		else if (numVerb == 1 && numNoun == 1 && numAdjective == 0 && numAdverb == 1) {
			
		}
		else if (numVerb == 1 && numNoun == 1 && numAdjective == 0 && numAdverb == 2) {
			
		}
		else if (numVerb == 1 && numNoun == 1 && numAdjective == 1 && numAdverb == 1) {
			
		}
		else if (numVerb == 1 && numNoun == 1 && numAdjective == 1 && numAdverb == 2) {
			
		}
		else if (numVerb == 1 && numNoun == 1 && numAdjective == 2 && numAdverb == 1) {
			
		}
		else if (numVerb == 1 && numNoun == 1 && numAdjective == 2 && numAdverb == 2) {
			
		}
		else if (numVerb == 2 && numNoun == 1 && numAdjective == 0 && numAdverb == 0) {
			
		}
		else if (numVerb == 2 && numNoun == 1 && numAdjective == 1 && numAdverb == 0) {
			
		}
		else if (numVerb == 2 && numNoun == 1 && numAdjective == 2 && numAdverb == 0) {
			
		}
		else if (numVerb == 2 && numNoun == 1 && numAdjective == 0 && numAdverb == 1) {
			
		}
		else if (numVerb == 2 && numNoun == 1 && numAdjective == 0 && numAdverb == 2) {
			
		}
		else if (numVerb == 2 && numNoun == 1 && numAdjective == 1 && numAdverb == 1) {
			
		}
		else if (numVerb == 2 && numNoun == 1 && numAdjective == 1 && numAdverb == 2) {
			
		}
		else if (numVerb == 2 && numNoun == 1 && numAdjective == 2 && numAdverb == 1) {
			
		}
		else if (numVerb == 2 && numNoun == 1 && numAdjective == 2 && numAdverb == 2) {
			
		}
		else if (numVerb == 1 && numNoun == 2 && numAdjective == 0 && numAdverb == 0) {
			
		}
		else if (numVerb == 1 && numNoun == 2 && numAdjective == 1 && numAdverb == 0) {
			
		}
		else if (numVerb == 1 && numNoun == 2 && numAdjective == 2 && numAdverb == 0) {
			
		}
		else if (numVerb == 1 && numNoun == 2 && numAdjective == 0 && numAdverb == 1) {
			
		}
		else if (numVerb == 1 && numNoun == 2 && numAdjective == 0 && numAdverb == 2) {
			
		}
		else if (numVerb == 1 && numNoun == 2 && numAdjective == 1 && numAdverb == 1) {
			
		}
		else if (numVerb == 1 && numNoun == 2 && numAdjective == 1 && numAdverb == 2) {
			
		}
		else if (numVerb == 1 && numNoun == 2 && numAdjective == 2 && numAdverb == 1) {
			
		}
		else if (numVerb == 1 && numNoun == 2 && numAdjective == 2 && numAdverb == 2) {
			
		}
		else if (numVerb == 2 && numNoun == 2 && numAdjective == 0 && numAdverb == 0) {
			
		}
		else if (numVerb == 2 && numNoun == 2 && numAdjective == 1 && numAdverb == 0) {
			
		}
		else if (numVerb == 2 && numNoun == 2 && numAdjective == 2 && numAdverb == 0) {
			
		}
		else if (numVerb == 2 && numNoun == 2 && numAdjective == 0 && numAdverb == 1) {
			
		}
		else if (numVerb == 2 && numNoun == 2 && numAdjective == 0 && numAdverb == 2) {
			
		}
		else if (numVerb == 2 && numNoun == 2 && numAdjective == 1 && numAdverb == 1) {
			
		}
		else if (numVerb == 2 && numNoun == 2 && numAdjective == 1 && numAdverb == 2) {
			
		}
		else if (numVerb == 2 && numNoun == 2 && numAdjective == 2 && numAdverb == 1) {
			
		}
		else if (numVerb == 2 && numNoun == 2 && numAdjective == 2 && numAdverb == 2) {
			
		}
		
		
		
		
		
		
		
		
		
		
	}
	
	
}