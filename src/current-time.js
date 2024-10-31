class CurrentTime extends HTMLElement {
    static observedAttributes = ['format'];
    connectedCallback() {
        this.innerHTML =
            `<p class="currentTime__title">Heure ${this.getAttribute("format") ?? "locale"}</p> 
            <time class="currentTime__time"></time>`;
        this.$title = this.querySelector("title");
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
        this.title.innerHTML = `Heure ${this.getAttribute("format") ?? "locale"}`
    }

    disconnectedCallback() {
        console.log(this.$time);
    };


};

customElements.define("current-time", CurrentTime);