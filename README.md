![application presentation](src/assets/main-page-screen-shoot.png)

# Multi-page form

See the live version of [Multi-page form](https://yakksiek.github.io/multistep-form/).

The application features a multi-page form interface, styled using Styled-Components. It includes a custom select component, allowing users to navigate through options with keys. Additionally, the app uses a photo file upload system and live form validation.

**Main features**:

1. **Styled-Components**

    - Employs Styled-Components for advanced styling.
    - Enables dynamic theming and modular CSS in JavaScript.

2. **Live Validation**

    - Integrates live validation for form inputs.

3. **Photo File Upload**

4. **Custom Soft UI**

    - Implements a custom Soft UI design.
    - Offers a modern and user-friendly interface with subtle aesthetics.

5. **Use of Reducer in Form**
    - Utilizes a reducer for state management in the form.
    - Enhances form handling, making it more efficient and scalable.

&nbsp;

## 💡 Technologies

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![ESlint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)

&nbsp;

## 💿 Installation

The project uses [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/). After ensuring they are installed, follow these steps:

1. **Install Dependencies**
    - Open your terminal.
    - Navigate to the project's root directory.
    - Type `npm i` to install the necessary packages.

&nbsp;

## 🤔 Solutions provided in the project

**Custom Select**

```javascript
function Select({ options, value, data }) {
    const { name, label, error } = data;
    const [listVisible, setListVisible] = useState(false);
    const [highlightedIndex, setHeighlitedIndex] = useState(0);
    const { form, updateState, errors } = useSelectContext();
    const optionRefs = useRef([]);
    const disabled = options.length === 0;

    useEffect(() => {
        if (listVisible) setHeighlitedIndex(0);
    }, [listVisible]);

    useEffect(() => {
        const scrollIntoView = () => {
            if (highlightedIndex >= 0 && optionRefs.current[highlightedIndex]) {
                optionRefs.current[highlightedIndex].current.scrollIntoView({
                    behavior: 'auto',
                    block: 'nearest',
                    inline: 'nearest',
                });
            }
        };

        scrollIntoView();
    }, [highlightedIndex]);

    const resetSelectError = () => {
        const errorInState = errors[name];
        console.log(errorInState);
        if (!errorInState) return;
        const { [name]: ommitedKey, ...rest } = errors;
        updateState('errors', rest);
    };

    const handleStateUpdate = (newValue) => {
        resetSelectError();

        if (name === 'country') {
            const newData = { country: newValue, state: '', city: '' };
            updateState('form', { ...form, ...newData });
            updateState('city', []);
            updateState('state', []);
            return;
        }

        updateState('form', { ...form, [name]: newValue });
    };

    const handleKeyDown = (e) => {
        if (disabled) return;

        switch (e.code) {
            case 'Space':
                setListVisible((prevState) => !prevState);
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                if (!listVisible) {
                    setListVisible(true);
                    break;
                }

                // eslint-disable-next-line no-case-declarations
                const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
                if (newValue >= 0 && newValue < options.length) {
                    setHeighlitedIndex(newValue);
                }
                break;
            case 'Enter':
                handleStateUpdate(options[highlightedIndex].name);
                setListVisible(false);
                break;
            case 'Escape':
                setListVisible(false);
                break;
        }
    };

    const handleOver = (index) => {
        setHeighlitedIndex(index);
    };

    const handleClick = () => {
        setListVisible((prevState) => !prevState);
    };

    const handleBlur = () => {
        setListVisible(false);
    };

    const selectOption = (e, listItem) => {
        e.stopPropagation();
        handleStateUpdate(listItem);
        setListVisible(false);
    };

    const optionsJSX = () => {
        const items = options.map((item, index) => {
            const isOver = highlightedIndex === index;
            optionRefs.current[index] = optionRefs.current[index] || createRef();

            return (
                <StyledOptionItem
                    key={item.isoCode || index}
                    ref={optionRefs.current[index]}
                    onMouseOver={() => {
                        handleOver(index);
                    }}
                    isOver={isOver}
                    onClick={(e) => selectOption(e, item.name)}
                >
                    {item.name}
                </StyledOptionItem>
            );
        });

        return items;
    };

    const renderArrow = listVisible ? <UilAngleUp /> : <UilAngleDown />;

    return (
        <Wrapper variant="flex-column">
            <Label>{label}:</Label>
            <StyledCustomSelect
                tabIndex={0}
                onBlur={handleBlur}
                onClick={handleClick}
                onKeyDown={handleKeyDown}
                disabled={disabled}
                isVisible={listVisible}
            >
                <StyledValue value={value} name={name} data-select={name}>
                    {value || (!disabled && 'Choose one option')}
                </StyledValue>
                {!disabled && renderArrow}
                <StyledSelectOptions isVisible={listVisible}>{optionsJSX()}</StyledSelectOptions>
            </StyledCustomSelect>
            <FieldError>{error}</FieldError>
        </Wrapper>
    );
}
```

&nbsp;

## 🙋‍♂️ Feel free to contact me

Write sth nice ;) Find me on [LinkedIn ](https://www.linkedin.com/in/marcin-kulbicki-426817a4/) or [Instagram](https://www.instagram.com/yakksiek/)

&nbsp;

## 👏 Thanks / Special thanks / Credits

Thanks to my [Mentor - devmentor.pl](https://devmentor.pl/) – for providing me with this task and for code review.
