class Cardnews extends HTMLElement{
    constructor(){
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles());

    }

    build() {
    
        const createElement = (tag, className = '', content = '') => {
            const element = document.createElement(tag);
            if (className) element.setAttribute('class', className);
            if (content) element.textContent = content;
            return element;
        };
    
        const createLink = (text, href) => {
            const link = createElement('a', '', text);
            link.href = href;
            return link;
        };
    
        // Root container
        const componentRoot = createElement('div', 'card');
    
        // Left side (author, title, content)
        const cardLeft = createElement('div', 'card_left');
        const author = createElement('span', '', `By ${this.getAttribute('author') || 'Anonymous'}`);
        const titleLink = createLink(this.getAttribute('title'), this.getAttribute('url-link'));
        const content = createElement('p', '', this.getAttribute('content'));
    
        cardLeft.append(author, titleLink, content);
    
        // Right side (image)
        const cardRight = createElement('div', 'card_right');
        const newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('photo') || './asset/Default_pfp.svg.png';
        newsImage.alt = 'Darth Vader image';
        newsImage.width = 400;
    
        cardRight.appendChild(newsImage);
    
        // Append left and right sides to root
        componentRoot.append(cardLeft, cardRight);
    
        return componentRoot;
    }

    styles() { 
        const style = document.createElement("style")
        style.textContent= 
        `
        .card{
            width: 50%;
            display: flex;
            flex-direction: row;
            box-shadow: 10px 10px 5px -5px rgba(0,0,0,0.53);
            -webkit-box-shadow: 10px 10px 5px -5px rgba(0,0,0,0.53);
            -moz-box-shadow: 10px 10px 5px -5px rgba(0,0,0,0.53);
            justify-content: space-evenly;
        }

        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }

        .card_left > h1 {
            margin-top: 15px;
            font-size: 25px;
        }

        .card_left > p {
            padding-top: 10px;
            color: gray;
        }

        .card_left > span {
            font-weight: 400;
        }       
        `
        return style

    }

}

customElements.define('card-news', Cardnews);