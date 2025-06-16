import React, { useState } from "react";
import {
  Input,
  FormControl,
  InputGroup,
  Text,
  Flex,
  InputRightElement,
  Box,
  Checkbox,
  Spinner,
  InputLeftElement,
  Textarea,
  Skeleton,
} from "@chakra-ui/react";
import Select from "react-select";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "@emotion/styled";
import { altCustomStyles, customStyles } from "./constants";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const StyledInput = styled(Input)`
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px
      ${(props) => (props.user ? "greyDark" : "#F1F8FB")} inset;
    -webkit-text-fill-color: #000;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const StyledArea = styled(Textarea)`
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px
      ${(props) => (props.user ? "greyDark" : "#F1F8FB")} inset;
    -webkit-text-fill-color: #000;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const AuthInput = ({
  value = "",
  onClick,
  show,
  password,
  name,
  isReadOnly,
  isDisabled,
  handleKeyPress,
  error,
  onChange,
  optional,
  onBlur,
  onFocus,
  placeholder,
  type,
  label,
  req,
}) => {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    setIsTyping(true);
    onChange(e);
  };

  const handleInputBlur = (e) => {
    setIsTyping(false);
    onBlur && onBlur(e);
  };

  const getBorderColor = () => {
    if (isTyping) {
      return "1px solid #01ACF0";
    } else if (value && !error) {
      return "1px solid #01ACF0";
    } else if (error) {
      return "1px solid #EE383A";
    } else {
      return "1px solid #C3C6D1";
    }
  };

  const getColor = () => {
    if (isTyping) {
      return "#01ACF0";
    } else if (value && !error) {
      return "#01ACF0";
    } else if (error) {
      return "#EE383A";
    } else {
      return "#C3C6D1";
    }
  };

  const getBackgroundColor = () => {
    if (isTyping) {
      return "#F5FCFB";
    } else if (value && !error) {
      return "#F5FCFB";
    } else if (error) {
      return "#FDE8E8";
    } else {
      return "transparent";
    }
  };

  return (
    <FormControl isInvalid={error} pos="relative">
      <Text
        color={optional ? "#1B2027" : "#626A81"}
        fontSize={optional ? "14px" : "12px"}
        fontWeight={500}
        lineHeight={optional ? "20px" : "18px"}
        bg={optional ? "transparent" : "white"}
        zIndex={2}
        pos={optional ? "unset" : "absolute"}
        mb={optional ? "6px" : "unset"}
        top={optional ? 0 : "-10px"}
        left={optional ? "0" : "20px"}
        borderRadius={optional ? "none" : "8px"}
        px={optional ? "0" : "5px"}
        w="fit-content"
      >
        {label} <span style={{ display: req ? "" : "none" }}>*</span>
      </Text>
      <InputGroup>
        <StyledInput
          value={value}
          isDisabled={isDisabled}
          w="100%"
          name={name}
          cursor={isReadOnly ? "auto" : ""}
          isReadOnly={isReadOnly}
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
          bg={getBackgroundColor()}
          borderRadius="8px"
          border={getBorderColor()}
          onBlur={(e) => handleInputBlur(e)}
          onFocus={onFocus}
          h={optional ? "44px" : "48px"}
          type={type ? type : "text"}
          color="#0C0D10"
          fontSize="14px"
          _placeholder={{
            fontSize: "14px",
            color: "#646668",
          }}
          placeholder={placeholder}
          autoComplete="new-password"
        />
        {show && (
          <InputRightElement
            cursor="pointer"
            h={optional ? "44px" : "48px"}
            onClick={onClick}
          >
            {!password ? (
              <FaEyeSlash color={getColor()} />
            ) : (
              <FaEye color={getColor()} />
            )}
          </InputRightElement>
        )}
      </InputGroup>
      <Flex
        align="center"
        w="full"
        justifyContent={error ? "space-between" : "flex-end"}
      >
        {error && (
          <Text fontSize="10px" mt="3px" color="red">
            {error}
          </Text>
        )}
      </Flex>
    </FormControl>
  );
};

export const CustomInput = ({
  value = "",
  onClick,
  show,
  password,
  isLoading = false,
  name,
  isReadOnly,
  search,
  isDisabled,
  handleKeyPress,
  error,
  values,
  add,
  currency,
  onChange,
  optional,
  onBlur,
  onAdd,
  onFocus,
  placeholder,
  type,
  label,
  req,
}) => {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    setIsTyping(true);
    onChange(e);
  };

  const handleInputBlur = (e) => {
    setIsTyping(false);
    onBlur && onBlur(e);
  };

  const getBorderColor = () => {
    if (isTyping) {
      return "1px solid #01ACF0";
    } else if (value && !error) {
      return "1px solid #01ACF0";
    } else if (error) {
      return "1px solid #EE383A";
    } else {
      return "1px solid #C5C5CF";
    }
  };

  const getColor = () => {
    if (isTyping) {
      return "#01ACF0";
    } else if (value && !error) {
      return "#01ACF0";
    } else if (error) {
      return "#EE383A";
    } else {
      return "#C5C5CF";
    }
  };

  const getBackgroundColor = () => {
    if (isTyping) {
      return "#F5FCFB";
    } else if (value && !error) {
      return "#F5FCFB";
    } else if (error) {
      return "#FDE8E8";
    } else {
      return "transparent";
    }
  };

  return isLoading ? (
    <Skeleton
      h={optional ? "44px" : "48px"}
      borderRadius="8px"
      mb={optional ? "6px" : "unset"}
    />
  ) : (
    <FormControl isInvalid={error} pos="relative">
      <Text
        color={optional ? "#444648" : "#626A81"}
        fontSize={optional ? "10px" : "12px"}
        fontWeight={500}
        lineHeight={optional ? "20px" : "18px"}
        bg={optional ? "transparent" : "white"}
        zIndex={2}
        pos={optional ? "unset" : "absolute"}
        display={label ? "" : "none"}
        mb={optional ? "6px" : "unset"}
        top={optional ? 0 : "-10px"}
        left={optional ? "0" : "20px"}
        borderRadius={optional ? "none" : "8px"}
        px={optional ? "0" : "5px"}
        w="fit-content"
      >
        {label} <span style={{ display: req ? "" : "none" }}>*</span>
      </Text>
      <InputGroup>
        {currency ? (
          <InputLeftElement
            fontSize="14px"
            fontWeight={500}
            pl="10px"
            cursor="pointer"
            h={optional ? "44px" : "48px"}
          >
            {currency}
          </InputLeftElement>
        ) : search ? (
          <InputLeftElement h={optional ? "44px" : "48px"}>
            <BsSearch fill="#646668" size="15px" />
          </InputLeftElement>
        ) : (
          ""
        )}
        <StyledInput
          value={value}
          isDisabled={isDisabled}
          w="100%"
          name={name}
          cursor={isReadOnly ? "auto" : ""}
          isReadOnly={isReadOnly}
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
          bg={getBackgroundColor()}
          borderRadius="8px"
          border={getBorderColor()}
          onBlur={(e) => handleInputBlur(e)}
          onFocus={onFocus}
          h={optional ? "44px" : "48px"}
          type={type ? type : "text"}
          color="#0C0D10"
          fontSize="14px"
          _placeholder={{
            fontSize: "14px",
            color: "#8993A4",
          }}
          pl={currency || search ? "50px" : ""}
          placeholder={placeholder}
          autoComplete="new-password"
        />
        {show ? (
          <InputRightElement
            cursor="pointer"
            h={optional ? "44px" : "48px"}
            onClick={onClick}
          >
            {!password ? (
              <FaEyeSlash color={getColor()} />
            ) : (
              <FaEye color={getColor()} />
            )}
          </InputRightElement>
        ) : add ? (
          <InputRightElement
            onClick={() =>
              values?.filter === "" || values?.dropFilter === "" ? "" : onAdd()
            }
            cursor={
              values?.filter === "" || values?.dropFilter === ""
                ? ""
                : "pointer"
            }
            h={optional ? "44px" : "48px"}
          >
            <BsSearch fill="#646668" size="15px" />
          </InputRightElement>
        ) : (
          ""
        )}
      </InputGroup>
      <Flex
        align="center"
        w="full"
        justifyContent={error ? "space-between" : "flex-end"}
      >
        {error && (
          <Text fontSize="10px" mt="3px" color="red">
            {error}
          </Text>
        )}
      </Flex>
    </FormControl>
  );
};

export const TextInput = ({
  value = "",
  h,
  name,
  isReadOnly,
  isDisabled,
  handleKeyPress,
  error,
  currency,
  onChange,
  optional,
  onBlur,
  onFocus,
  placeholder,
  type,
  label,
  req,
}) => {
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e) => {
    setIsTyping(true);
    onChange(e);
  };

  const handleInputBlur = (e) => {
    setIsTyping(false);
    onBlur && onBlur(e);
  };

  const getBorderColor = () => {
    if (isTyping) {
      return "1px solid #01ACF0";
    } else if (value && !error) {
      return "1px solid #01ACF0";
    } else if (error) {
      return "1px solid #EE383A";
    } else {
      return "1px solid #C5C5CF";
    }
  };

  const getBackgroundColor = () => {
    if (isTyping) {
      return "#F5FCFB";
    } else if (value && !error) {
      return "#F5FCFB";
    } else if (error) {
      return "#FDE8E8";
    } else {
      return "transparent";
    }
  };

  return (
    <FormControl isInvalid={error} pos="relative">
      <Text
        color={optional ? "#42526D" : "#626A81"}
        fontSize={optional ? "14px" : "12px"}
        fontWeight={500}
        lineHeight={optional ? "20px" : "18px"}
        bg={optional ? "transparent" : "white"}
        zIndex={2}
        pos={optional ? "unset" : "absolute"}
        display={label ? "" : "none"}
        mb={optional ? "6px" : "unset"}
        top={optional ? 0 : "-10px"}
        left={optional ? "0" : "20px"}
        borderRadius={optional ? "none" : "8px"}
        px={optional ? "0" : "5px"}
        w="fit-content"
      >
        {label} <span style={{ display: req ? "" : "none" }}>*</span>
      </Text>
      <InputGroup>
        <StyledArea
          value={value}
          isDisabled={isDisabled}
          w="100%"
          name={name}
          cursor={isReadOnly ? "auto" : ""}
          isReadOnly={isReadOnly}
          onKeyPress={handleKeyPress}
          onChange={handleInputChange}
          bg={getBackgroundColor()}
          borderRadius="8px"
          border={getBorderColor()}
          onBlur={(e) => handleInputBlur(e)}
          onFocus={onFocus}
          h={h}
          type={type ? type : "text"}
          color="#0C0D10"
          fontSize="14px"
          _placeholder={{
            fontSize: "14px",
            color: "#8993A4",
          }}
          pl={currency ? "30px" : ""}
          placeholder={placeholder}
          autoComplete="new-password"
        />
      </InputGroup>
      <Flex
        align="center"
        w="full"
        justifyContent={error ? "space-between" : "flex-end"}
      >
        {error && (
          <Text fontSize="10px" mt="3px" color="red">
            {error}
          </Text>
        )}
      </Flex>
    </FormControl>
  );
};

export const SelectInput = ({
  label,
  value,
  placeHolder,
  opt,
  isLoading,
  onChange,
  isDisabled,
  borderRight,
  name,
  setMenuIsOpen,
  menuIsOpen,
  onBlur,
  options,
  req,
  arrow,
}) => {
  const [error, setError] = useState(false);
  const [localMenuIsOpen, setLocalMenuIsOpen] = useState(false);

  const handleMenuOpen = () => {
    if (setMenuIsOpen) {
      setMenuIsOpen(true);
    } else {
      setLocalMenuIsOpen(true);
    }
  };

  const handleMenuClose = () => {
    if (setMenuIsOpen) {
      setMenuIsOpen(false);
    } else {
      setLocalMenuIsOpen(false);
    }
  };

  const isMenuOpen = menuIsOpen !== undefined ? menuIsOpen : localMenuIsOpen;

  return (
    <Box>
      <Text
        color="#42526D"
        fontSize="14px"
        fontWeight={500}
        display={label ? "" : "none"}
        lineHeight="20px"
        zIndex={2}
        mb="6px"
        w="fit-content"
      >
        {label} <span style={{ display: req ? "" : "none" }}>*</span>
      </Text>
      <Select
        name={name}
        styles={
          borderRight
            ? altCustomStyles()
            : opt
            ? customStyles()
            : customStyles(error)
        }
        components={{
          IndicatorSeparator: () => <div style={{ display: "none" }}></div>,
          DropdownIndicator: () => (
            <div>
              {isLoading ? (
                <Spinner size="sm" color="#01ACF0" />
              ) : arrow ? (
                <IoIosArrowDown />
              ) : (
                ""
              )}
            </div>
          ),
        }}
        options={options}
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        menuIsOpen={isMenuOpen}
        value={value}
        isDisabled={isLoading || isDisabled}
        onChange={onChange}
        onFocus={() => setError(false)}
        onBlur={(e) => {
          if (!value) {
            setError(true);
          } else {
            setError(false);
          }
          if (!opt) {
            onBlur && onBlur(e);
          }
        }}
        placeholder={placeHolder}
      />
    </Box>
  );
};

export const CheckInput = ({
  w,
  name,
  title,
  isReadOnly,
  onChange,
  isLoading,
  isChecked,
}) => {
  return isLoading ? (
    <Skeleton h="44px" borderRadius="8px" mb="6px" />
  ) : (
    <Box>
      <Box w={w} p="10px 16px" border="1px solid #C5C5CF" borderRadius="8px">
        <Flex align="center" w="fit-content" cursor="pointer">
          <Checkbox
            name={name}
            isChecked={isChecked}
            onChange={onChange}
            isReadOnly={isReadOnly}
            size="md"
          />
          <Text
            onClick={onChange}
            pl="8px"
            color="#354764"
            fontSize="14px"
            fontWeight={500}
          >
            {title}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
