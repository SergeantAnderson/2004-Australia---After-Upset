const introTitle = document.querySelector("#inner_window_1 h3");
if (introTitle) {
	introTitle.textContent = "Do you have what it takes to run the state?";
  }

document.getElementById("inner_window_1").children[1].innerHTML = `<li>Can you win the 2018 South Australian Election?</li><li>Heading into the race, you'll face off against either the Incumbent Australian Labor Party or the Liberal/National Coalition, depending who you choose to play as.</li><li>The answers you choose along the Campaign Trail will affect your popularity with the public for better or for worse.</li><li>Appeal to the people across Australia to get them to put their first preference for your party.</li><li>Defy the polls and either form a Majority Government, or if not, form a strong Minority Government with Crossbench MP's</li>`;
document.styleSheets[0].insertRule(".inner_window_w_desc{ margin:1em 0 0 0.5em !important;padding-top: 0.5em !important;}", 0);
document.styleSheets[0].insertRule(".inner_window_question{ margin:1em 0 .7em 0.5em !important;padding-top: 0.3em !important;}", 0);
document.styleSheets[0].insertRule("#main_content_area { height:82% !important;}", 0);

campaignTrail_temp.show_premium = true;
campaignTrail_temp.premier_ab_test_version = -1;

let style = document.createElement('style');style.innerHTML = `#overall_result {overflow: auto;}`;document.head.appendChild(style);


quotes = [
    `"There is an opportunity for us to renew ourselves." - Jay Weatherill`,
]

selQuote = quotes[Math.round(Math.random()*(quotes.length - 1))]
corrr = `<h2>The 2018 South Australian Election</h2><font id="wittyquote" size="4" color="white"><em>` + selQuote + `</em></font>`
$("#theme_picker")[0].style.display = "none"
$("#bottomBar")[0].style.display = "none"

styling = document.createElement("style");
document.head.appendChild(styling);

styling.innerHTML = `
#candidate_form h3 {
    visibility: hidden;
}

#candidate_form h3::before {
  content: "Please select your party:";
  position: absolute;
  top: 10px;
  left: 0;
  height: 100%;
  width: 100%;
  visibility: visible;
}

#candidate_id, #running_mate_id, .person_description_window, .person_button {
    z-index: 289;
    position:relative;
}

#running_mate_form h3 {
    visibility: hidden;
}

#running_mate_form h3::before {
  content: "Please select your party leader:";
  position: absolute;
  top: 10px;
  left: 0;
  height: 100%;
  width: 100%;
  visibility: visible;
}

#candidate_summary ul li:nth-child(2),
#candidate_summary ul li:nth-child(3), #running_mate_summary ul li:nth-child(2) {
    display: none;
}
`

let z = new MutationObserver((mutationsList, observer) => {
    let runningMateSummary = document.querySelector("#running_mate_summary");
    if (runningMateSummary && runningMateSummary.children[0].children[2].innerHTML != runningMateSummary.children[0].children[2].innerHTML.replaceAll("Home State", "Division")) {
        runningMateSummary.children[0].children[2].innerHTML = runningMateSummary.children[0].children[2].innerHTML.replaceAll("Home State", "Division");
    }
});

z.observe(document, { subtree: true, childList: true });


campaignTrail_temp.election_json = [
    {
        "model": "campaign_trail.election",
        "pk": 20,
        "fields": {
            "year": 2016,
            "display_year": "2004 Australia - After Upset",
            "summary": "<div style='overflow-y:scroll;height:200px;'><p>Kim Beazley and the Federal Labor Party came to power after their shock win in the 2001 Campaign, bringing down 5 years of the John Howard Liberal Government. With the world uneasy with current global tensions and a mounting War on Terror, the incumbent Government will need to steer course in order to stay afloat, or sink to a rebranded Liberal Party hoping to win again.</p><p><ul><li>The Australian Labor Party lead by Prime Minister Kim Beazley will need to re-inforce their decisions and policies made over the past 3 years, whilst fending off new attacks from the Opposition to maintain control and stability within.</li><li>The Liberal/National Coalition lead by former Treasurer Peter Costello under the Howard years, is attempting to re-brand the Liberals into a new Conservative fire-brand that can bring strength to the nation, both in domestic economics, and overseas intervention.</li></ul><p>The nation faces a new course heading into the 2004 Election, with the current Government, whilst popular, will face a challenge from the Opposition.</p></div>",
            "image_url": "",
            "winning_electoral_vote_number": 24,
            "advisor_url": "123",
            "recommended_reading": "<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>",
            "has_visits": 1,
            "no_electoral_majority_image": "../static/images/2012-no-majority.jpg"
        }
    }
]

campaignTrail_temp.temp_election_list = [
    {
        "id": 20,
        "year": 2016,
        "is_premium": 0,
        "display_year": "2004 Australia - Right Thing to Do"
    }
]

campaignTrail_temp.credits = "Not Dan Bryan"

campaignTrail_temp.global_parameter_json = [
    {
        "model": "campaign_trail.global_parameter",
        "pk": 1,
        "fields": {
            "vote_variable": 1.125,
            "max_swing": 0.12,
            "start_point": 0.94,
            "candidate_issue_weight": 10,
            "running_mate_issue_weight": 3,
            "issue_stance_1_max": -0.71,
            "issue_stance_2_max": -0.3,
            "issue_stance_3_max": -0.125,
            "issue_stance_4_max": 0.125,
            "issue_stance_5_max": 0.3,
            "issue_stance_6_max": 0.71,
            "global_variance": 0.01,
            "state_variance": 0.005,
            "question_count": 25,
            "default_map_color_hex": "#C9C9C9",
            "no_state_map_color_hex": "#999999"
        }
    }
]

campaignTrail_temp.candidate_json = [
    {
        "model": "campaign_trail.candidate",
        "pk": 1001,
        "fields": {
            "first_name": "Australian Labor Party - ",
            "last_name": "ALP",
            "election": 20,
            "party": "",
            "state": "",
            "priority": 1,
            "description": "<p>The Australian Labor Party came into power after defeating the incumebt Howard Liberal Government in the 2001 election, having upset the nation and taking over in a small, but maintainable majority Government. Over the past 3 years, much has been made with ALP policy, both on a domestic scale and internationally, with intervention now in Afghanistan in the U.S. lead War on Terror.</p><p>Despite the Government's strong record, a series of small scandals and broken promises may lead to the party's defeat with just 3 years in Government. The party will need to remain united and put forth their domestic policies to the nation once more to demonstrate they are the capable party to lead.</p>",
            "color_hex": "#853f3f",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 1002,
        "fields": {
            "first_name": "Kim",
            "last_name": "Beazley",
            "election": 20,
            "party": "Labor",
            "state": "Brand, Western Australia",
            "priority": 1,
            "description": "<p>",
            "color_hex": "#0000FF",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p>Kim Beazley serves as the 26th Prime Minister of Australia, having been swept into power in the 2001 Election with a small majority Government to work with. Beazley has seem much domestic policy overhaul in his first term, reversing course from the previous Howard Government</p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2001,
        "fields": {
            "first_name": "Liberal/National Coalition - ",
            "last_name": "L/NP",
            "election": 20,
            "party": "",
            "state": "",
            "priority": 1,
            "description": "<p></p>",
            "color_hex": "#30396d",
            "secondary_color_hex": null,
            "is_active": 1,
            "image_url": "",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": null,
            "candidate_score": 1,
            "running_mate": false
        }
    },
    {
        "model": "campaign_trail.candidate",
        "pk": 2002,
        "fields": {
            "first_name": "Peter",
            "last_name": "Costello",
            "election": 20,
            "party": "Liberal",
            "state": "Higgins, Victoria",
            "priority": 1,
            "description": "",
            "color_hex": "#b33939",
            "secondary_color_hex": null,
            "is_active": 0,
            "image_url": "",
            "electoral_victory_message": "This guy wins!",
            "electoral_loss_message": "This guy loses!",
            "no_electoral_majority_message": "We all win?",
            "description_as_running_mate": "<p></p>",
            "candidate_score": 1,
            "running_mate": true
        }
    },
    
]

campaignTrail_temp.running_mate_json = [
    {
        "model": "campaign_trail.running_mate",
        "pk": 109261,
        "fields": {
            "candidate": 1001,
            "running_mate": 1002
        }
    },
     {
        "model": "campaign_trail.running_mate",
        "pk": 109262,
        "fields": {
            "candidate": 2001,
            "running_mate": 2002
        }
    },
]

campaignTrail_temp.opponents_default_json = [
    {
        "election": 20,
        "candidates": [
            1001,
            2001,
        ]
    }
]

campaignTrail_temp.opponents_weighted_json = [
    {
        "election": 20,
        "candidates": [
            1001,
            2001,
        ]
    }
]

jet_data = {
    "headerColor": "#cfb783",
    "windowColor": "#a8abd7",
    "containerColor": "#acb7c5",
    "innerWindowColor": "#3d406c",
    "bannerImageUrl": "https://jetsimon.com/public/placeholderbanner.png",
    "backgroundImageUrl": "https://thepropertytribune.com.au/wp-content/uploads/2021/06/adelaide-skyline.jpg",
    "endingTextColor": "#000000",
}

//#startcode

nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#cfb783";
nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#3d406c";
document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;
$("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;
$(".container")[0].style.backgroundColor = "#be5b5b";
document.getElementById("header").src = "https://jetsimon.com/public/placeholderbanner.png";
document.body.background = "https://thepropertytribune.com.au/wp-content/uploads/2021/06/adelaide-skyline.jpg";
document.head.innerHTML += "<style>#results_container {color:#000000;} .inner_window_w_desc {background-color:#3d406c!important;}</style>";

//#endcode