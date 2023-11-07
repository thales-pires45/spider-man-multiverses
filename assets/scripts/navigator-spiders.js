function selectButtonNavigator (selectedButton) {
    const activeButtonNavigator = document.querySelector('.s-controller--active');
    activeButtonNavigator.classList.remove('s-controller--active');
    selectedButton.classList.add('s-controller--active');
}