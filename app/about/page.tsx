"use client";

import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Jane Doe",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "John Smith",
    role: "CTO",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Emily Brown",
    role: "Head of Design",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Johnson",
    role: "Marketing Director",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
            About FashionStore
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mb-8">
            Discover our story, mission, and the team behind FashionStore.
          </p>
          <div className="grid gap-10 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2010, FashionStore began as a small boutique in New
                York City. Our passion for fashion and commitment to quality
                quickly gained us a loyal customer base. Today, we're proud to
                be a leading online fashion retailer, serving customers
                worldwide with the latest trends and timeless classics.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground">
                At FashionStore, our mission is to make high-quality, stylish
                clothing accessible to everyone. We believe that fashion is a
                form of self-expression, and we're committed to helping our
                customers look and feel their best. We strive to offer a diverse
                range of products that cater to all styles, sizes, and budgets.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Team</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <h3 className="font-semibold">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Commitment</h2>
              <p className="text-muted-foreground">
                We're committed to sustainable and ethical fashion. We work
                closely with our suppliers to ensure fair labor practices and
                use eco-friendly materials whenever possible. Our goal is to
                reduce our environmental impact while still delivering the
                quality and style our customers expect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
