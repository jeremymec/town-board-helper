import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

interface AboutDialogProps {
  open: boolean;
  closeCallback: () => void;
}

function AboutDialog(props: AboutDialogProps) {
  return (
    <Dialog
      className="aboutDialog"
      open={props.open}
      onClose={props.closeCallback}
      maxWidth="md"
    >
      <DialogTitle>About Town Board Helper</DialogTitle>
      <DialogContent>
        <Typography>
          New World Town Board Helper is a simple app intended for one thing - the
          speedy lookup of how to craft an item required by the town board.
          Enter the name of the item you need to craft and click the green plus
          button to the right to open the corresponding recipe.
        </Typography>
        <Typography>
          You can adjust the desired quantity of the parent item by changing the
          number next to the title, which will propagate this quantity change to
          the items in the recipe.
        </Typography>
        <br />
        <Typography>
          This is a proof of concept made by a fan of the game. Please pass any
          feedback / feature requests on by opening an issue on the{" "}
          <Link
            href="https://github.com/jeremymec/town-board-helper"
            target="_blank"
          >
            public Github.
          </Link>
        </Typography>
        <br />
        <Typography>
          All item names, recipes, and images used are the property of their
          respective copyright holders. This website is open source and free
          from monetization. It is purely static, and does not record any data.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default AboutDialog;
