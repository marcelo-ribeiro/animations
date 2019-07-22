export default {
  inserted(el, binding, vnode) {
    console.log(el, binding, vnode);

    const elements = document.querySelectorAll('[data-animation]');
    console.log(elements);
    const offset = 10;
    const scrollEvent = binding.arg === 'scrollEvent' ? 'ionScroll' : 'scroll';

    function getBoxDimensions() {
      const windowTop = offset * el.offsetHeight / 100;
      // Define a dobra superior, inferior e laterais da tela
      return {
        windowTop: offset * el.scrollHeight / 100,
        windowBottom: el.scrollHeight - windowTop,
        windowLeft: 0,
        windowRight: el.scrollWidth,
      };
    }

    function start(element) {
      const temp = element;
      // Seta os atributos customizados
      temp.style.animationDelay = temp.dataset.animationDelay;
      temp.style.animationDuration = temp.dataset.animationDuration;

      // Inicia a animacao setando a classe da animacao
      if (temp.dataset.animation) { temp.classList.add(temp.dataset.animation); }
      // Seta o elemento como animado
      temp.dataset.animated = 'true';
    }

    function isElementOnScreen(element) {
      // Obtem o boundingbox do elemento
      const elementRect = element.getBoundingClientRect();
      const elementTop = elementRect.top + parseInt(element.dataset.animationOffset, 10)
      || elementRect.top;
      const elementBottom = elementRect.bottom - parseInt(element.dataset.animationOffset, 10)
      || elementRect.bottom;
      const elementLeft = elementRect.left;
      const elementRight = elementRect.right;

      const {
        windowTop, windowBottom, windowLeft, windowRight,
      } = getBoxDimensions();

      // Verifica se o elemento esta na tela
      return (
        elementTop <= windowBottom
      && elementBottom >= windowTop
      && elementLeft <= windowRight
      && elementRight >= windowLeft
      );
    }

    // Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
    function checkElementsOnScreen(els = elements) {
      for (let i = 0, len = elements.length; i < len; i += 1) {
        // Passa para o proximo laço se o elemento ja estiver animado
        if (!els[i].dataset.animated && isElementOnScreen(els[i])) start(els[i]);
      }
    }

    // Atualiza a lista de elementos a serem animados
    // function update() {
    //   const newElements = document.querySelectorAll(
    //     '[data-animation]:not([data-animated])',
    //   );
    //   checkElementsOnScreen(newElements);
    // }
    console.log(`${binding.arg}${binding.value}`);

    el.addEventListener(scrollEvent, () => {
      checkElementsOnScreen();
    }, { passive: true });

    vnode.context.$on('hook:mounted', () => {
      setTimeout(() => {
        checkElementsOnScreen();
      }, 300);
    });
  },
};
