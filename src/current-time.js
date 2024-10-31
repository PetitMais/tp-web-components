class CurrentTime extends HTMLElement {
    static observedAttributes = ['format'];

    connectedCallback() {
        this.format = this.getAttribute("format");
        this.innerHTML =
            `<p class="currentTime__title"></p> 
            <time class="currentTime__time"></time>`;
        this.$title = this.querySelector("p");
        this.$time = this.querySelector("time");
        this.renderTitle();
        console.log(this.renderTitle());

        setInterval(
            () => {
                if (this.format === "UTC") {
                    this.$time.innerHTML = new Date().toUTCString()
                } else {
                    this.$time.innerHTML = new Date().toLocaleString()
                }
            }, 1000);

    };
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "format") {
            this.format = newValue;

            this.renderTitle();
        }
    }

    disconnectedCallback() {
        console.log(this.$time);
    };

    renderTitle() {
        if (this.$title) {
            this.$title.textContent = this.format === "UTC"
                ? "Heure UTC"
                : "Heure locale";     
        }
    }


};

customElements.define("current-time", CurrentTime);