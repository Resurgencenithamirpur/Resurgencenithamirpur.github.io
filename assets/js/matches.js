
json = `[{"team1": "Optimistic esports", "team2": "Bandits", "time": "3:00 PM", "date": "23 Feb, 2022"}, {"team1": "L Streak ", "team2": " H20", "time": "3:00 PM", "date": "23 Feb, 2022"}, {"team1": "Revengers", "team2": " IMPROMPTU", "time": "3:00 PM", "date": "23 Feb, 2022"}, {"team1": "Team Mavericks ", "team2": "Into the Valo-Verse", "time": "3:00 PM", "date": "23 Feb, 2022"}, {"team1": "L Streaks Esports", "team2": "WarHog5", "time": "3:00 PM", "date": "23 Feb, 2022"}, {"team1": "Wild Wolves ", "team2": " Terror Squad", "time": "3:00 PM", "date": "23 Feb, 2022"}, {"team1": "Innocent 5", "team2": "Zenith", "time": "3:00 PM", "date": "23 Feb, 2022"}, {"team1": "Clutch Baliye Boys (CBB) ", "team2": "OTLW ONE", "time": "3:00 PM", "date": "23 Feb, 2022"}, {"team1": "Rog academy", "team2": "KO Squad", "time": "4:00 PM", "date": "23 Feb, 2022"}, {"team1": "Skarmy eSports ", "team2": "TEAM XHIBIT", "time": "4:00 PM", "date": "23 Feb, 2022"}, {"team1": "Nightmare OG ", "team2": " The Void", "time": "4:00 PM", "date": "23 Feb, 2022"}, {"team1": "Eldians ", "team2": "Haphazard", "time": "4:00 PM", "date": "23 Feb, 2022"}, {"team1": "MrZ", "team2": "Uzumaki", "time": "4:00 PM", "date": "23 Feb, 2022"}, {"team1": "NEON ", "team2": "Team Solid", "time": "4:00 PM", "date": "23 Feb, 2022"}, {"team1": "Karan Ke Katore", "team2": "Master Baiters", "time": "4:00 PM", "date": "23 Feb, 2022"}, {"team1": "RISING DESTINY (RSD) ", "team2": "Unknown 5", "time": "4:00 PM", "date": "23 Feb, 2022"}, {"team1": "Team Astra", "team2": "SnipeOff", "time": "5:00 PM", "date": "23 Feb, 2022"}, {"team1": "11thies ", "team2": "Eradicators", "time": "5:00 PM", "date": "23 Feb, 2022"}, {"team1": "LKD ", "team2": "Onyx", "time": "5:00 PM", "date": "23 Feb, 2022"}, {"team1": "RaMu ", "team2": "WeNoobs", "time": "5:00 PM", "date": "23 Feb, 2022"}, {"team1": "X gravity esports", "team2": "RAGNAROK", "time": "5:00 PM", "date": "23 Feb, 2022"}, {"team1": "Reuk Bawa", "team2": "GCS", "time": "5:00 PM", "date": "23 Feb, 2022"}, {"team1": "GKP ", "team2": "Nalla Squad", "time": "5:00 PM", "date": "23 Feb, 2022"}, {"team1": "LOSERS ", "team2": "smolPP", "time": "5:00 PM", "date": "23 Feb, 2022"}, {"team1": "Autolock Esports", "team2": "CarToonz", "time": "6:00 PM", "date": "23 Feb, 2022"}, {"team1": "Akatsuki  ", "team2": "Talibani Avengers", "time": "6:00 PM", "date": "23 Feb, 2022"}, {"team1": "MARCH ", "team2": "Ek Kudi", "time": "6:00 PM", "date": "23 Feb, 2022"}, {"team1": "Psyzor Esports", "team2": "F8", "time": "6:00 PM", "date": "23 Feb, 2022"}, {"team1": "Amigos Esports", "team2": "Russia is Just Better", "time": "6:00 PM", "date": "23 Feb, 2022"}, {"team1": "KAIZEN ", "team2": "Samurais", "time": "6:00 PM", "date": "23 Feb, 2022"}, {"team1": "Team G9", "team2": "Fabel", "time": "6:00 PM", "date": "23 Feb, 2022"}, {"team1": "TKB", "team2": "Gorillaz", "time": "6:00 PM", "date": "23 Feb, 2022"}]`

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
