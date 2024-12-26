# Use the latest Ubuntu LTS image
FROM ubuntu:22.04

# Avoid prompts from apt
ENV DEBIAN_FRONTEND=noninteractive

# Install SSH and other basic utilities
RUN apt-get update && apt-get install -y \
    openssh-server \
    sudo \
    net-tools \
    iputils-ping \
    && rm -rf /var/lib/apt/lists/*

# Create a user and set password
RUN useradd -m -s /bin/bash gabishes \
    && echo "gabishes:gabi123" | chpasswd \
    && adduser gabishes sudo

# Configure SSH
RUN mkdir /var/run/sshd \
    && sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config \
    && sed -i 's/#PasswordAuthentication yes/PasswordAuthentication yes/' /etc/ssh/sshd_config

# Expose SSH port
EXPOSE 22

# Start SSH service
CMD ["/usr/sbin/sshd", "-D"]

