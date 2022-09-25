var questions = ["How was your day on 1-5?",
 "What was your stress level 1-5?", 
"How many hours did you sleep 1-12?", 
"How tired are you 1-5?",
 "How much screen time today?", 
"How much hours of the screentime was on social media or games?", 
"How much hours of the screentime was productive?",
"Thank you for doing our survey. Click next to see an analysis from the survey:"];
var response = [7];
var questionNum = 0;
var summary = "";
//function()
window.onload=function(){
    document.getElementById("nextPage").style.display='none';
    document.getElementById("backButton").style.display='none';
    document.getElementById("summary").value = "poo";
}

function summaryload() {

    alert(summary);
    document.getElementById("summary").innerHTML = summary;
}
function change() {
    document.getElementById("summary").innerHTML = summary;
}
function back() {
  
    questionNum--;
    if(questionNum == 0 ) {
        document.getElementById("backButton").style.display='none';
    }
    document.getElementById("question").innerHTML = questions[questionNum]; //new question
    document.getElementById("questionResponse").value = ""; //clears response
}

function keyCheck() {
   
    if(questionNum == 7 ) {
        document.getElementById("backButton").style.marginTop="100px";
        document.getElementById("nextPage").style.marginBottom="25px";
        document.getElementById("questionResponse").style.display='none';
    }
    if (event.key === 'Enter' && questionNum<7) {
		//alert("p");
        response[questionNum] = document.getElementById("questionResponse").value;
		if((response[0]>0 && response[0]<6) ||
        (response[1]>0 && response[1]<6) || 
        (response[2]>0 && response[2]<13) ||
        (response[3]>0 && response[3]<6) || 
        (response[4]>0 && response[4]<25) ||
		(response[5]>0 && response[5]<response[4]) ||
		(response[6]>0 && response[6]<response[4]) ) {


        questionNum++;
        document.getElementById("question").innerHTML = questions[questionNum]; //new question
        document.getElementById("questionResponse").value = ""; //clears response
       
        
    } else {
			alert("Invalid response try again");
		}
    }
    if(questionNum == 7) {document.getElementById("nextPage").style.display='block';}
    
    if(questionNum >= 1) {  document.getElementById("backButton").style.display='block';}

    
    if(questionNum == 7) {
   


		//System.out.println("Thank you for doing our survey. "
		//		+ "Here is an anaiysis from the survey:");

        //show this message
    
        var avg = 0.0;
		avg=response[0];
		avg = avg + 6-response[1];
		if(response[2]<=2) {
			avg += 1;
		}
		else if(response[2] <=4) {
			avg +=2;
		}
		else if(response[2] <=6) {
			avg +=3;
		}
		else if(response[2] <=9) {
			avg +=4;
		}
		else {
			avg +=5;
		}
        
		avg += 6-response[3];
		avg = avg/4;
        //show the average score

		//score = avg//"Your average score out of 5 is: *put avg*"

		summary = "";

		if(response[0]<3 && response[1]>3 && response[2]<6 && response[3]>3
			&& response[6]>(response[4]/2)) {
				summary = "Due to " + response[2] + " hours of sleep"
				+ "you had a tiring day. Also, you spent " + response[6]
						+ " hours on a device for productive reasons"
						+ " which may have left to your stressful day."
						+ " Check on the below items to see if they"
						+ " could help your day :)";
	}
	else if(response[0]<3 && response[1]>3 && response[2]<6 && response[3]>3) {
		summary = "Due to " + response[2] + " hours of sleep"
				+ "you had a tiring day. Havign a tiring day may have led"
				+ " to your stressful day."
						+ " Check on the below items to see if they"
						+ " could help your day :)";
		
	}
	else if(response[0]<3 && response[1]>3 && response[3]>3
			&& response[6]>(response[4]/2)) {
		summary = "Spending " + response[6]
						+ " hours on a device for productive reasons"
						+ " May have left to your stressful day."
						+ " Check on the below items to see if they"
						+ " could help your day :)";	
	}
	else if(avg<3) {
	 summary = "You had an okay day, but we wish you to have less anxiety. "		 
						 + " Check on the below items to see if they"
						 + " could help your day :)";
	}
	// print out the summary
	
	
	else if((avg>2 && avg<4) || (response[0]==3 && response[1]==3 && (response[2]>=6 || 
		response[2]<=9) && response[3]==3
			&& response[6]==(response[4]/2))) {
		summary = "You had an average day, but we want your day to be better."
						+ " Check on the below items to see if they"
						+ " could help your day :)";	
	}
	
	else if(avg>4) {
		summary = "You had a great day~~~ Keep it up! Want more info for fun? Look below";	
	}
	// print out the summary PLZ
    
    }
    
}


//package Survey;
/*
import java.util.Scanner;

public class Survey {

	public static void main(String[] args) {
		int[] data = new int[7];
		System.out.println("Welcome and thank you for taking "
				+ "our survey");
		System.out.println();
		Scanner input = new Scanner(System.in);
		System.out.println("How was your day on 1-5");
		data[0] = input.nextInt();
		//System.out.println(data[0]);
		System.out.println("What was your stress level 1-5");
		data[1]=input.nextInt();
		//System.out.println(data[1]);
		System.out.println("How many hours did you sleep 1-12");
		data[2] = input.nextInt();
		System.out.println("How tired are you 1-5");
		data[3] = input.nextInt();
		System.out.println("How much screen time today");
		data[4] = input.nextInt();
		System.out.println("How much hours of the screentime"
				+ " was on social media or games");
		data[5] = input.nextInt();
		System.out.println("How much hours of the screentime "
				+ "was productive");
		data[6]= input.nextInt();
		
		System.out.println("Thank you for doing our survey. "
				+ "Here is an analysis from the survey:");
		
		double avg = 0.0;
		avg=data[0];
		avg = avg + 6-data[1];
		if(data[2]<=2) {
			avg += 1;
		}
		else if(data[2] <=4) {
			avg +=2;
		}
		else if(data[2] <=6) {
			avg +=3;
		}
		else if(data[2] <=9) {
			avg +=4;
		}
		else {
			avg +=5;
		}
		avg += 6-data[3];
		avg = avg/4;
		System.out.println("Averge out of 5:");
		System.out.println(avg);
		
		if(data[0]<3 && data[1]>3 && data[2]<6 && data[3]>3
				&& data[6]>(data[4]/2)) {
			System.out.println("Due to " + data[2] + " hours of sleep"
					+ "you had a tiring day. Also, you spent " + data[6]
							+ " hours on a device for productive reasons"
							+ " which may have left to your stressful day."
							+ " Check on the below items to see if they"
							+ " could help your day :)");	
		}
		else if(data[0]<3 && data[1]>3 && data[2]<6 && data[3]>3) {
			System.out.println("Due to " + data[2] + " hours of sleep"
					+ "you had a tiring day. Havign a tiring day may have led"
					+ " to your stressful day."
							+ " Check on the below items to see if they"
							+ " could help your day :)");	
		}
		else if(data[0]<3 && data[1]>3 && data[3]>3
				&& data[6]>(data[4]/2)) {
			System.out.println("Spending " + data[6]
							+ " hours on a device for productive reasons"
							+ " May have left to your stressful day."
							+ " Check on the below items to see if they"
							+ " could help your day :)");	
		}
		else if(avg<3) {
		 System.out.println("You had an okay day, but we wish you to have less anxiety. "		 
				 			+ " Check on the below items to see if they"
				 			+ " could help your day :)");
		}
		// good
		
		
		else if((avg>2 && avg<4) || (data[0]==3 && data[1]==3 && (data[2]>=6 || data[2]<=9) && data[3]==3
				&& data[6]==(data[4]/2))) {
			System.out.println("You had an average day, but we want your day to be better."
							+ " Check on the below items to see if they"
							+ " could help your day :)");	
		}
		
		else if(avg>4) {
			System.out.println("You had a great day~~~ Keep it up! Want more info for fun? Look below");	
		}
		
		
		
		
	}

}
*/