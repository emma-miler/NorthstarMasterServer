console.log("test");

var template = `
<div class="coreuser">
    <img src="ICONNAME">
    <a class="name header">USERNAME</a>
    <div class="blurb">
        DESCRIPTION
    </div>
</div>
`

function addContributor(group, icon, name, description) {
    var x = template.replace("ICONNAME", icon);
    x = x.replace("USERNAME", name);
    x = x.replace("DESCRIPTION", description);
    document.getElementById(group).insertAdjacentHTML("beforeend", x);
}

addContributor("core", "https://avatars.githubusercontent.com/u/32057864?v=4", "BobTheBob9", "Big Man")
addContributor("core", "https://avatars.githubusercontent.com/u/27428383?v=4", "EmmaM", "Plugins, Invites, DiscordRPC, Launcher, Moderator, Security")
addContributor("core", "https://avatars.githubusercontent.com/u/11448698?v=4", "RoyalBlue", "Squirrel, Frontier Defense, Tool Developer")
addContributor("core", "https://avatars.githubusercontent.com/u/40122905?v=4", "GeckoEidechse", "Release Management, Moderator, Security")
addContributor("core", "https://avatars.githubusercontent.com/u/96569817?v=4", "pg9182", "Atlas, Server Containers, Stubs, Linux Builds")
addContributor("core", "https://avatars.githubusercontent.com/u/84360921?v=4", "wolf109909", "NorthstarCN")

addContributor("core", "https://avatars.githubusercontent.com/u/28826980?v=4", "KittenPopo", "Exploit fixes, Security")
addContributor("core", "https://avatars.githubusercontent.com/u/5182588?v=4", "p0358", "TFO")

addContributor("contrib", "https://avatars.githubusercontent.com/u/23240514?v=4", "Juicy", "Moderator, NavMeshes")
addContributor("contrib", "https://avatars.githubusercontent.com/u/7439692?v=4", "Taskinoz", "Moderator, NavMeshes")
addContributor("contrib", "https://avatars.githubusercontent.com/u/24855949?v=4", "Laundmo", "Modding Docs, Chathooks")
addContributor("contrib", "https://avatars.githubusercontent.com/u/22575741?v=4", "Barnaby", "Master Server, Website")

addContributor("contrib", "https://avatars.githubusercontent.com/u/48657826?v=4", "Amos", "Source Genius, RCON")
addContributor("contrib", "https://avatars.githubusercontent.com/u/66967891?v=4", "Spoon", "RPak/Starpak, PDiff")
addContributor("contrib", "https://avatars.githubusercontent.com/u/16081865?v=4", "cpdt", "Chathooks")

addContributor("contrib", "https://avatars.githubusercontent.com/u/34353603?v=4", "Legonzaur", "Discord Bot")
addContributor("contrib", "https://avatars.githubusercontent.com/u/41955154?v=4", "cat_or_not", "Co-Op Singleplayer")
addContributor("contrib", "https://avatars.githubusercontent.com/u/16687318?v=4", "Barichello", "Code Formatting, Github-CI")
addContributor("contrib", "https://avatars.githubusercontent.com/u/22678145?v=4", "x3Karma", "Moderator, Modding")
addContributor("contrib", "https://avatars.githubusercontent.com/u/11993538?v=4", "Alystrasz", "Localisations")
addContributor("contrib", "https://avatars.githubusercontent.com/u/62536724?v=4", "Dinorush", "Gamemodes")
addContributor("contrib", "https://avatars.githubusercontent.com/u/38541651?v=4", "Birb", "Server Bot")
addContributor("contrib", "https://avatars.githubusercontent.com/u/97146561?v=4", "H0l0", "Co-Op Singleplayer")
addContributor("contrib", "https://avatars.githubusercontent.com/u/64006268?v=4", "uniboi", "Modding Docs")

addContributor("contrib", "https://avatars.githubusercontent.com/u/67599507?v=4", "Rexx", "Custom Models, </br> Legion, RePak")
addContributor("contrib", "https://avatars.githubusercontent.com/u/16214950?v=4", "HeadAss", "Custom Models")
addContributor("contrib", "https://avatars.githubusercontent.com/u/94194459?v=4", "MasterLiberty", "Custom Models")