// obligatory comment here

var enabledCM = 0
//guide to new effcts
const waveeffect1 = new Effect(20, e => {
    
    //color goes from white to light gray
    Draw.color(
        Color.white, 
        Color.lightGray, 
        e.fout()
    );
    
    //line thickness goes from 2 to 0
    Lines.stroke(e.fout() * 2); 
    
    //draw a circle whose radius goes from 0 to 25
    Lines.circle(
        e.x, 
        e.y, 
        e.fin() * 25
    ); 
});
const waveeffect2 = new Effect(20, e => {

    Draw.color( Color.white, Color.black, e.fout());
    Lines.stroke(e.fin() * Mathf.random()*2+1); 
    Lines.circle(e.x, e.y, e.fout() * 25); 
});

Events.on(ClientLoadEvent, b  => {
    print(b);
    print("above");
    //enabledCM = "null";
    print("Asking player for enabling");
    Vars.ui.showCustomConfirm(
        "Switch on [#86BAF9]Campaign mode?[]",
        "[#86BAF9]Campaign mode[] will enable certain features and lock some stats in place. It decreases build costs and changes lighting rules a bit.\n[accent]Do you want to enable Campaign mode?[]",
        "No",
        "Yes",
        () => {
            enabledCM = 1;  
            print("Campaign mode enabled")
        },
        () => {            
            enabledCM = 0;
            print("Campaign mode disabled")
        }
    );
});


Events.on(WorldLoadEvent, e => {


print("enabledCM is: " + enabledCM)

    if(enabledCM == 1){
            print("[#00ff00]Turning on campaign mode for world[]");
            Vars.state.rules.buildCostMultiplier = 1;
            Vars.state.rules.deconstructRefundMultiplier = 0.5;
            Vars.state.rules.enemyLights = true;
            Vars.state.rules.unitAmmo = false;
    };
    if(enabledCM == 0){
            print("[#00ff00]Turning off campaign mode for world[]");
            Vars.state.rules.buildCostMultiplier = 1;
            Vars.state.rules.deconstructRefundMultiplier = 1;
            Vars.state.rules.enemyLights = false;
            Vars.state.rules.unitAmmo = true;
    };
});


Events.on(WorldLoadEvent, e => {
    
Vars.ui.showInfoText(
    "Hello!", "Hello world!"
);
});


Events.on(WaveEvent, e => {

let x = Vars.player.x;
let y = Vars.player.y;

waveeffect1.at(x, y);
waveeffect2.at(x, y);
});
