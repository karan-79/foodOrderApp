import { Box, Button, Typography } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { FC } from "react";

type Props = {
  count: number;
  onRemoveItem: () => void;
  onAddItem: () => void;
  showCount?: boolean;
};
const ItemCounter: FC<Props> = ({
  count,
  onRemoveItem,
  onAddItem,
  showCount = true,
}) => {
  return (
    <Box display="flex" sx={{ alignItems: "center" }}>
      <Button onClick={onRemoveItem} disabled={count <= 0}>
        <RemoveCircleOutlineIcon />
      </Button>

      {showCount ? (
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", fontSize: "1.25rem" }}
        >
          {count}
        </Typography>
      ) : null}
      <Button onClick={onAddItem}>
        <ControlPointIcon />
      </Button>
    </Box>
  );
};

export default ItemCounter;
