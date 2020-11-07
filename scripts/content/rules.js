// obligatory comment here
Events.on(WorldLoadEvent, e => {
    print("Asking player for enabling");
    Vars.ui.showCustomConfirm(
        "Switch on [#86BAF9]Campaign mode?[]",
        "[#86BAF9]Campaign mode[] will enable certain features and lock some stats in place. It decreases build costs and changes lighting rules a bit.\n[accent]Do you want to enable Campaign mode?[]",
        "No",
        "Yes",
        () => {
            print("[accent]Campaign mode not enabled[]")
        },
        () => {
            print("[#00ff00]Campaign mode is enabled[]")
            Vars.state.rules.buildCostMultiplier = 0.8;
            Vars.state.rules.deconstructRefundMultiplier = 1;
            Vars.state.rules.enemyLights = false;
            Vars.state.rules.unitAmmo = true;
        }
    );
});
