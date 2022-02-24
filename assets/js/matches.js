
json = `[{"team1": "LStreak Executioners", "team2": "Into the valo verse", "time": "4.00 pm", "date": "25 Feb,2022"}, {"team1": "L Streak eSports", "team2": "OTLW ONE", "time": "4.00 pm", "date": "25 Feb,2022"}, {"team1": "ROG Academy", "team2": "Nightmare OG ", "time": "4.00 pm", "date": "25 Feb,2022"}, {"team1": "MrZ ", "team2": "RISING DESTINY(RSD)", "time": "8.00pm", "date": "25 Feb,2022"}, {"team1": "Team AStra", "team2": "We Noobs", "time": "5.00 pm", "date": "25 Feb,2022"}, {"team1": "X Gravity Esports", "team2": "Nalla Squad ", "time": "5.00 pm", "date": "25 Feb,2022"}, {"team1": "Akatsuki", "team2": "Psyzor Esports", "time": "5.00 pm", "date": "25 Feb,2022"}, {"team1": "Amigos Esports", "team2": "Team G9", "time": "5.00 pm", "date": "25 Feb,2022"}]`
var html = `
<div class="nk-match">
<div class="nk-match-team-left">
    <a href="#">
        <span class="nk-match-team-logo">
            <img src="assets/images/team-1.jpg" alt="">
        </span>
        <span class="nk-match-team-name">
        team1
        </span>
    </a>
</div>
<div class="nk-match-status">
    <a href="#">
        <span class="nk-match-status-vs">VS</span>
        <span class="nk-match-status-date">date-match, time-match</span>
    </a>
</div>
<div class="nk-match-team-right">
    <a href="#">
        <span class="nk-match-team-name">
            team2
        </span>
        <span class="nk-match-team-logo">
            <img src="assets/images/team-2.jpg" alt="">
        </span>
    </a>
</div>
</div>`;

var matches = JSON.parse(json)
var div = document.getElementById('looped');
for(const match of matches){
    div.innerHTML+=html.replace('team1',match['team1'])
    .replace('team2',match['team2'])
    .replace('date-match',match['date'])
    .replace('time-match',match['time']);
}
