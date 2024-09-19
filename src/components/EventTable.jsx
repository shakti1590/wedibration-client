import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { MdDelete } from "react-icons/md";
import {
  CardFooter,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const EventTable = ({ events, onEdit, onDelete, currentPage, totalPages, onPageChange }) => {
  return (
    <>
      <table className="mt-4 w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <Typography variant="small" color="blue-gray" className="font-semibold text-[#E25C25]">
                City
              </Typography>
            </th>
            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <Typography variant="small" color="blue-gray" className="font-semibold text-[#E25C25]">
                Service
              </Typography>
            </th>
            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <Typography variant="small" color="blue-gray" className="font-semibold text-[#E25C25]">
                Service Type
              </Typography>
            </th>
            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <Typography variant="small" color="blue-gray" className="font-semibold text-[#E25C25]">
                Title
              </Typography>
            </th>
            {/* <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <Typography variant="small" color="blue-gray" className="font-semibold text-[#E25C25]">
                Title
              </Typography>
            </th> */}
            {/* <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <Typography variant="small" color="blue-gray" className="font-semibold text-[#E25C25]">
                Price
              </Typography>
            </th> */}
            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <Typography variant="small" color="blue-gray" className="font-semibold text-[#E25C25]">
                Address
              </Typography>
            </th>
            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
              <Typography variant="small" color="blue-gray" className="font-semibold text-[#E25C25]">
                Actions
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => {
            const isLast = index === events.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={event._id}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-medium text-black">
                    {event.city.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-medium text-black">
                    {event.service.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-medium text-black">
                    {event.serviceTypeCategory.name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-medium text-black">
                    {event.title}
                  </Typography>
                </td>
                {/* <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-medium text-black">
                    {event.price}
                  </Typography>
                </td> */}
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-medium text-black">
                   {event.streetName}, {event.district}, {event.state}, {event.country} ({event.pinCode})
                  </Typography>
                </td>
                <td className={classes}>
                  <Tooltip content="Edit Event">
                    <IconButton variant="text" onClick={() => onEdit(event)}>
                      <PencilIcon className="h-4 w-4" />
                    </IconButton>
                  </Tooltip>
                </td>
                <td className={classes}>
                  <Tooltip content="Delete Event">
                    <IconButton variant="text" onClick={() => onDelete(event._id)}>
                      <MdDelete className="h-4 w-4 text-red-600" />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page {currentPage} of {totalPages}
        </Typography>
        <div className="flex gap-2">
          <Button
            variant="outlined"
            size="sm"
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            size="sm"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </CardFooter>
    </>
  );
};

export default EventTable;
