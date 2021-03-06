import styled, { css } from "styled-components";
import { Flex, Box } from "reflexbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const OPEN_CLOSE_ANIMATION_DURATION = 300;

export const RootFlex = styled(Flex)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: transparent;
    justify-content: center;
    align-items: center;
    opacity: ${(props) => (props.open ? "1" : "0")};
    transform: translateY(${(props) => (props.open ? "0" : "100%")});
    transition: ${(props) =>
        props.open
            ? `opacity ${OPEN_CLOSE_ANIMATION_DURATION}ms ease`
            : `transform ${OPEN_CLOSE_ANIMATION_DURATION}ms ease ${OPEN_CLOSE_ANIMATION_DURATION}ms, opacity ${OPEN_CLOSE_ANIMATION_DURATION}ms ease`};
    z-index: 20;
`;

export const ContentFlex = styled(Flex)`
    background: ${(props) => props.theme.background};
    transition: color 0.3s ease, background 0.3s ease;
    border-radius: 12px;
    max-height: 64%;
    overflow: auto;
    box-shadow: 0px 30px 62px 0px ${(props) => props.theme.shadow};
`;

export const ListFlex = styled(Flex)`
    overflow: auto;
`;

export const SearchFlex = styled(Flex)`
    width: 100%;
    height: 48px;
    min-height: 48px;
    align-items: center;
    background: ${(props) => props.theme.background};
    padding-top: 4px;
    padding-left: 24px;
    padding-right: 24px;
    font-size: 20px;
    color: ${(props) => props.theme.text};
    box-shadow: 0px 4px 8px 4px ${(props) => props.theme.background};
    transition: color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
    z-index: 12;
`;

export const Input = styled.input`
    font-size: 16px;
    color: ${(props) => props.theme.text};
    font-family: Montserrat, sans-serif;
    border: none;
    background: ${(props) => props.theme.background};
    outline: none;
    width: 100%;
    transition: color 0.3s ease, background 0.3s ease;
    ::placeholder {
        font-family: Montserrat, sans-serif;
        color: ${(props) => props.theme.placeholder};
    }
`;

export const RowFlex = styled(Flex)`
    transition: background 0.3s ease, color 0.3s ease;
    cursor: pointer;
    background: ${(props) =>
        props.selected ? props.theme.primary : props.theme.background};
    color: ${(props) =>
        props.selected ? props.theme.textInverted : props.theme.text};
    border-radius: 12px;
    ${(props) =>
        !props.selected &&
        css`
            :hover {
                background: ${(props) => props.theme.foreground};
            }
        `};
`;

export const PointableBox = styled(Box)`
    cursor: pointer;
    display: flex;
    align-items: center;
`;

export const EmptyIcon = styled(FontAwesomeIcon)`
    font-size: 60px;
    color: ${(props) => props.theme.error};
`;

export const EmptyTextBox = styled(Box)`
    color: ${(props) => props.theme.error};
`;

export const PrimaryTextBox = styled(Box)`
    font-size: 12px;
    color: ${(props) =>
        props.selected ? props.theme.textInverted : props.theme.text};
    transition: color 0.3s ease;
`;

export const SecondaryTextBox = styled(Box)`
    font-size: 12px;
    color: ${(props) =>
        props.selected ? props.theme.textInverted : props.theme.textLight};
    transition: color 0.3s ease;
`;
