import React from "react";
import Particles from "react-particles";
import { loadFirePreset } from "tsparticles-preset-fire";

class ParticlesContainer extends React.PureComponent {
    async customInit(engine) {
        await loadFirePreset(engine);
    }

    render() {
        const options = {
            preset: "fire",
        };

        return <Particles options={options} init={this.customInit} />;
    }
}

export default ParticlesContainer;