import { useState } from "react";
import {
  ButtonGroup,
  Heading,
  IconButton,
  Stack,
  Table,
  Text,
  Pagination,
} from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import type { Product } from "@/data/ItemsTable";

type ProductTableProps = {
  title?: string;
  items: Product[];
  variant?: "line" | "outline";
  colorPalette?:
    | "gray"
    | "red"
    | "orange"
    | "yellow"
    | "green"
    | "teal"
    | "blue"
    | "cyan"
    | "purple"
    | "pink";
  size?: "sm" | "md" | "lg";
  stickyHeader?: boolean;
  interactive?: boolean;
  pageSize?: number;
};

export const CreateTableUI = ({
  title = "Tabla",
  items,
  variant = "line",
  colorPalette = "gray",
  size = "md",
  stickyHeader = false,
  interactive = false,
  pageSize = 5,
}: ProductTableProps) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / pageSize);

  // Items que se muestran en la página actual
  const currentItems = items.slice((page - 1) * pageSize, page * pageSize);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1) return;
    if (newPage > totalPages) return;
    setPage(newPage);
  };

  return (
    <Stack width="full" gap="5">
      <Heading size="xl">{title}</Heading>
      <Table.ScrollArea maxW="3xl">
        <Table.Root
          variant={variant}
          colorPalette={colorPalette}
          size={size}
          stickyHeader={stickyHeader}
          interactive={interactive}
        >
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Product</Table.ColumnHeader>
              <Table.ColumnHeader>Category</Table.ColumnHeader>
              <Table.ColumnHeader>Model</Table.ColumnHeader>
              <Table.ColumnHeader>Brand</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {currentItems.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.model}</Table.Cell>
                <Table.Cell>{item.brand}</Table.Cell>
                <Table.Cell textAlign="end">
                  ${item.price.toFixed(2)}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>

      <Text textAlign="center">
        Página {page} de {totalPages}
      </Text>

      <Pagination.Root count={totalPages} pageSize={1} page={page}>
        <ButtonGroup variant="ghost" size="sm" wrap="wrap">
          <Pagination.PrevTrigger asChild>
            <IconButton
              aria-label="Previous Page"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              <LuChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          <Pagination.Items
            render={(pageItem) => (
              <IconButton
                key={pageItem.value}
                variant={pageItem.value === page ? "outline" : "ghost"}
                onClick={() => setPage(pageItem.value)}
              >
                {pageItem.value}
              </IconButton>
            )}
          />

          <Pagination.NextTrigger asChild>
            <IconButton
              aria-label="Next Page"
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
            >
              <LuChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Stack>
  );
};
