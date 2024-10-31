class CurrentTime extends HTMLElement {
    static observedAttributes;
    connectedCallback() {
        this.innerHTML =
            `<p class="currentTime__title">Heure ${this.getAttribute("format") ?? "locale"}</p> 
            <time class="currentTime__time"></time>`;
        this.$time = this.querySelector("time");
        this.$utc = this.getAttribute("format");
        setInterval(
            () => {
                if (this.$utc === "UTC") {
                    this.$time.innerHTML = new Date().toUTCString()
                } else {
                    this.$time.innerHTML = new Date().toLocaleString()
                }
            }, 1000);

    };
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    static get observedAttributes() { 
        return ['format']; 
    }

    disconnectedCallback() {
        console.log(this.$time);
    };


};

customElements.define("current-time", CurrentTime);