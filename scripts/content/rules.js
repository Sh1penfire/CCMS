//Events.on(WorldLoadEvent, e => {
//Vars.state.rules.buildCostMultiplier = 0.8;
//Vars.state.rules.deconstructRefundMultiplier = 1;
//Vars.state.rules.enemyLights = false;
//Vars.state.rules.unitAmmo = true;
#});
const CCMSBrulechange = newEffect(20, e => {
    Draw.color(Color.yellow, Color.orange, e.fin()); //color goes from yellow to orange
    Lines.stroke(e.fout() * 2); //line thickness goes from 2 to 0
    Lines.circle(e.x, e.y, e.fin() * 100); //draw a circle whose radius goes from 0 to 100
});

//create the block type
const ccmsb = extendContent(Block, "CCMSB", {
    //override the method to build configuration
    buildConfiguration(tile, table){
        table.addImageButton(Icon.upOpen, Styles.clearTransi, run(() => {
            //configure the tile to signal that it has been pressed (this sync on client to server)
            tile.configure(0)
        })).size(50).disabled(boolf(b => tile.entity != null && !tile.entity.cons.valid()))
    },

    //override configure event
    configured(tile, value){
        //make sure this silo has the items it needs to change config
        if(tile.entity.cons.valid()){
            //make this effect occur at the tile location
            Effects.effect(CCMSBrulechange, tile)

            //Redefine variables
            Vars.state.rules.buildCostMultiplier = 0.8;
            Vars.state.rules.deconstructRefundMultiplier = 1;
            Vars.state.rules.enemyLights = false;
            Vars.state.rules.unitAmmo = true;
            //triggering consumption makes it use up the items it requires
            tile.entity.cons.trigger()
        }
    }
})
