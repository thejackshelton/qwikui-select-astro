import { component$, useStyles$ } from "@builder.io/qwik";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectListbox,
  SelectOption,
} from "@qwik-ui/headless";
import styles from "@components/select/select-example.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <>
      <Select class="select">
        <SelectTrigger class="select-trigger">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectListbox class="select-listbox">
          <SelectOption>Option 1</SelectOption>
          <SelectOption>Option 2</SelectOption>
        </SelectListbox>
      </Select>
    </>
  );
});
