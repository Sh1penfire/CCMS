/*Events.on(WorldLoadEvent, e => {
Vars.state.rules.buildCostMultiplier = 0.8;
Vars.state.rules.deconstructRefundMultiplier = 1;
Vars.state.rules.enemyLights = false;
Vars.state.rules.unitAmmo = true;
});*/
            print("Asking player for enabling)"

Events.on(WorldLoadEvent, e => {
    Vars.ui.showCustomConfirm(
        "[]Switch on [#8f00ff][] Campaign mode?[]","[#8f00ff]Campaign mode[] will enable certain reatrues and lock some stats in place. It decreases build costs and changes lighting rules a bit.\n[accent]Do you want to Campaign mode?[]",
        "No",
        "Yes",
        ()=>{
            print("[accent]Campaign mode not enabled[]"
            Vars.state.rules.buildCostMultiplier = 1;
            Vars.state.rules.deconstructRefundMultiplier = 0.5;
            Vars.state.rules.enemyLights = true;
            Vars.state.rules.unitAmmo = false;
        )},
        ()=>{  
            Vars.state.rules.buildCostMultiplier = 0.8;
            Vars.state.rules.deconstructRefundMultiplier = 1;
            Vars.state.rules.enemyLights = false;
            Vars.state.rules.unitAmmo = true;
        });
});
