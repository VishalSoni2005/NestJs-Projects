"use client";
import axiosInstance from "@/lib/axiosInstance";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// step 1
const schema = z.object({
  name: z.string().min(3, "Name must be of at least 3 characters"),
  email: z.string().email("Invalid email format"),
});

const Page = () => {
  //* step 2
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  //* step 3
  const onSubmit = async (data) => {
    try {
      console.log(data);

      const res = await axiosInstance.post("/users", {name: data.name, email: data.email});

      if (!res) {
        throw new Error("Error fetching users");
      }
      console.log(" User Added Successfully:", res.data);
      reset();
    } catch (error) {
      console.error(" Error Submitting form:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>➕ Add User</h2>

      <form
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="flex gap-2 "
      >
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className="border-white border-2 p-0.5"
            style={{ display: "block", marginBottom: "5px", width: "100%" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        {/* Email input */}
        <div>
          <input
            className="border-white border-2 p-0.5"
            {...register("email")}
            placeholder="Email"
            style={{ display: "block", marginBottom: "5px", width: "100%" }}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <button
          className="border-white border-2 p-0.5"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Page;
