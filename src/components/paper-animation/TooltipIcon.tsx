import React from "react";
import { IconButton } from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Tooltip from "../Tooltip";

interface TooltipIconProps {
  ariaLabel: string;
  iconSrc: string;
  onCopy?: () => void;
  copyText: string;
}

const TooltipIcon: React.FC<TooltipIconProps> = ({
  ariaLabel,
  iconSrc,
  onCopy,
  copyText,
}) => (
  <Tooltip content="Copied to clipboard!">
    <div className="icon-container">
      <CopyToClipboard text={copyText} onCopy={onCopy}>
        <IconButton
          aria-label={ariaLabel}
          width="40px"
          height="auto"
          _hover={{ animation: "blink 0.5s step-start infinite" }}
        >
          <img src={iconSrc} alt={ariaLabel} />
        </IconButton>
      </CopyToClipboard>
    </div>
  </Tooltip>
);

export default TooltipIcon;
